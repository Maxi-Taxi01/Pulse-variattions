(function () {
  const maps = window.INDIVIDUAL_SYSTEM_MAPS || [];
  const stage = document.querySelector("#mapStage");
  const select = document.querySelector("#mapSelect");
  const index = document.querySelector("#mapIndex");
  const downloadButton = document.querySelector("#downloadSvg");
  const detailPanel = document.querySelector("#detailPanel");
  const detailClose = document.querySelector("#detailClose");
  const detailTheme = document.querySelector("#detailTheme");
  const detailTitle = document.querySelector("#detailTitle");
  const detailMeaning = document.querySelector("#detailMeaning");
  const detailContextPerson = document.querySelector("#detailContextPerson");
  const detailContext = document.querySelector("#detailContext");
  const detailAnalyticalRow = document.querySelector("#detailAnalyticalRow");
  const detailAnalytical = document.querySelector("#detailAnalytical");
  const detailInfluence = document.querySelector("#detailInfluence");
  const detailCenter = document.querySelector("#detailCenter");
  const detailRelations = document.querySelector("#detailRelations");
  const detailRelationsSection = document.querySelector("#detailRelationsSection");
  const detailSource = document.querySelector("#detailSource");
  const params = new URLSearchParams(window.location.search);
  const exportMode = params.get("export") === "1";
  const requestedMap = params.get("map");
  const NS = "http://www.w3.org/2000/svg";

  if (exportMode) document.body.classList.add("export-mode");

  const tones = {
    strength: { fill: "#eef6e4", accent: "#78a934", line: "#8fa76e" },
    relation: { fill: "#eef0f8", accent: "#2b3990", line: "#8d95bb" },
    barrier: { fill: "#fae8e8", accent: "#e31e24", line: "#e31e24" },
    opportunity: { fill: "#f9efd3", accent: "#e69b20", line: "#a99366" }
  };

  const regions = [
    { x: 48, y: 128, w: 704, h: 388 },
    { x: 1048, y: 128, w: 704, h: 388 },
    { x: 48, y: 586, w: 704, h: 388 },
    { x: 1048, y: 586, w: 704, h: 388 }
  ];

  let current = maps.find((map) => map.id === requestedMap) || maps[0];
  let currentNodeLookup = new Map();

  function escapeXml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");
  }

  function wrapText(text, maxChars, maxLines) {
    const words = String(text).split(/\s+/);
    const lines = [];
    let line = "";
    for (const word of words) {
      const candidate = line ? `${line} ${word}` : word;
      if (candidate.length <= maxChars || !line) {
        line = candidate;
      } else {
        lines.push(line);
        line = word;
      }
    }
    if (line) lines.push(line);
    if (lines.length > maxLines) {
      const kept = lines.slice(0, maxLines);
      kept[maxLines - 1] = `${kept[maxLines - 1].replace(/[.,;:]?$/, "")}…`;
      return kept;
    }
    return lines;
  }

  function textLines(lines, x, y, options = {}) {
    const {
      size = 14,
      weight = 500,
      fill = "#1a1a2e",
      lineHeight = size * 1.25,
      anchor = "start",
      family = "Inter, Segoe UI, sans-serif",
      italic = false
    } = options;
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${fill}" font-family="${family}" font-size="${size}" font-weight="${weight}"${italic ? ' font-style="italic"' : ""}>${lines
      .map(
        (line, index) =>
          `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`
      )
      .join("")}</text>`;
  }

  function itemPolarity(theme, item) {
    if (item.polarity) return item.polarity;
    return theme.tone === "barrier" ? "negative" : "positive";
  }

  function itemLayout(theme, region) {
    const count = theme.items.length;
    const columns = count > 3 ? 2 : count === 3 ? 2 : 1;
    const rows = Math.ceil(count / columns);
    const nodeW = columns === 1 ? 340 : 286;
    const nodeH = 62;
    const gapX = columns === 1 ? 0 : 42;
    const totalW = columns * nodeW + (columns - 1) * gapX;
    const startX = region.x + (region.w - totalW) / 2;
    const usableTop = region.y + 76;
    const usableHeight = region.h - 102;
    const gapY = rows === 1 ? 0 : Math.max(12, (usableHeight - rows * nodeH) / (rows - 1));
    return theme.items.map((item, index) => {
      const column = index % columns;
      const row = Math.floor(index / columns);
      return {
        ...item,
        x: startX + column * (nodeW + gapX),
        y: usableTop + row * (nodeH + gapY),
        w: nodeW,
        h: nodeH
      };
    });
  }

  function lineToCenter(node, center, polarity, accent, index) {
    const sx = node.x + node.w / 2;
    const sy = node.y + node.h / 2;
    const tx = center.x + center.w / 2;
    const ty = center.y + center.h / 2;
    const bend = index % 2 === 0 ? 38 : -38;
    const mx = (sx + tx) / 2 + (sy < ty ? bend : -bend);
    const my = (sy + ty) / 2 + (sx < tx ? -bend : bend);
    const negative = polarity === "negative";
    return `<path class="map-connection center-connection" data-source="${escapeXml(
      node.code
    )}" data-target="CENTRALE_VARIABELE" d="M ${sx} ${sy} Q ${mx} ${my} ${tx} ${ty}" fill="none" stroke="${
      negative ? "#e31e24" : accent
    }" stroke-width="${negative ? 2.5 : 2.2}" stroke-opacity="${negative ? 0.72 : 0.48}" ${
      negative ? 'stroke-dasharray="8 7"' : ""
    } marker-end="url(#arrow-${negative ? "negative" : "positive"})"/>`;
  }

  function crossLink(link, lookup) {
    const source = lookup.get(link.from);
    const target = lookup.get(link.to);
    if (!source || !target) return "";
    const sx = source.x + source.w / 2;
    const sy = source.y + source.h / 2;
    const tx = target.x + target.w / 2;
    const ty = target.y + target.h / 2;
    const dx = tx - sx;
    const dy = ty - sy;
    const distance = Math.max(Math.hypot(dx, dy), 1);
    const nx = -dy / distance;
    const ny = dx / distance;
    const bend = Math.min(95, Math.max(42, distance * 0.16));
    const cx = (sx + tx) / 2 + nx * bend;
    const cy = (sy + ty) / 2 + ny * bend;
    const lx = 0.25 * sx + 0.5 * cx + 0.25 * tx;
    const ly = 0.25 * sy + 0.5 * cy + 0.25 * ty;
    const negative = link.polarity === "negative";
    const color = negative ? "#e31e24" : "#6f9d2d";
    const labelWidth = Math.max(54, link.label.length * 6.4 + 18);
    return `
      <g class="map-connection cross-connection" data-source="${escapeXml(
        link.from
      )}" data-target="${escapeXml(link.to)}">
      <path d="M ${sx} ${sy} Q ${cx} ${cy} ${tx} ${ty}" fill="none" stroke="${color}" stroke-width="3.2" ${
        negative ? 'stroke-dasharray="10 7"' : ""
      } marker-end="url(#cross-${negative ? "negative" : "positive"})"/>
      <g transform="translate(${lx - labelWidth / 2} ${ly - 12})">
        <rect width="${labelWidth}" height="24" rx="12" fill="#ffffff" stroke="${color}" stroke-opacity="0.25"/>
        ${textLines([link.label], labelWidth / 2, 16, {
          size: 10,
          weight: 750,
          fill: color,
          anchor: "middle"
        })}
      </g>
      </g>`;
  }

  function nodeMarkup(node, theme) {
    const tone = tones[theme.tone] || tones.strength;
    const displayCode = node.displayLabel || node.code.replaceAll("_", " ");
    const codeLines = wrapText(displayCode, node.w > 300 ? 30 : 24, 2);
    const codeY = node.y + node.h / 2 - ((codeLines.length - 1) * 8);
    return `
      <g class="map-node" data-code="${escapeXml(node.code)}" role="button" tabindex="0" aria-label="${escapeXml(
        `${displayCode}: ${node.meaning}`
      )}">
        <title>${escapeXml(`${displayCode}: ${node.meaning}`)}</title>
        <rect x="${node.x + 7}" y="${node.y + 8}" width="${node.w}" height="${node.h}" rx="12" fill="#243048" opacity="0.12"/>
        <rect class="node-card" x="${node.x}" y="${node.y}" width="${node.w}" height="${node.h}" rx="12" fill="#ffffff" stroke="#d8dde7"/>
        <rect x="${node.x}" y="${node.y}" width="9" height="${node.h}" rx="5" fill="${tone.accent}"/>
        ${textLines(codeLines, node.x + node.w / 2 + 4, codeY, {
          size: displayCode.length > 25 ? 11.5 : 13,
          weight: 850,
          fill: tone.accent,
          anchor: "middle",
          lineHeight: 16
        })}
      </g>`;
  }

  function closeDetails() {
    if (!detailPanel) return;
    detailPanel.hidden = true;
    if (stage?.querySelectorAll) {
      stage.querySelectorAll(".map-node.selected").forEach((node) => node.classList.remove("selected"));
      stage.querySelectorAll(".connection-active").forEach((element) => element.classList.remove("connection-active"));
      stage.classList.remove("connection-focus");
    }
  }

  function highlightConnections(code) {
    if (!stage?.querySelectorAll) return;
    const activeCodes = new Set([code]);
    const connections = [...stage.querySelectorAll(".map-connection")];

    connections.forEach((connection) => {
      const source = connection.getAttribute("data-source");
      const target = connection.getAttribute("data-target");
      const isActive = source === code || target === code;
      connection.classList.toggle("connection-active", isActive);
      if (isActive) {
        if (source !== "CENTRALE_VARIABELE") activeCodes.add(source);
        if (target !== "CENTRALE_VARIABELE") activeCodes.add(target);
      }
    });

    stage.querySelectorAll(".map-node").forEach((node) => {
      node.classList.toggle("connection-active", activeCodes.has(node.getAttribute("data-code")));
    });
    stage.classList.add("connection-focus");
  }

  function relationText(link, code) {
    const otherCode = link.from === code ? link.to : link.from;
    const direction = link.from === code ? "→" : "←";
    const currentEntry = currentNodeLookup.get(code);
    const otherEntry = currentNodeLookup.get(otherCode);
    const currentLabel = currentEntry?.item.displayLabel || code.replaceAll("_", " ");
    const otherLabel = otherEntry?.item.displayLabel || otherCode.replaceAll("_", " ");
    return `${currentLabel} ${direction} ${link.label} ${direction} ${otherLabel}`;
  }

  function openDetails(code) {
    if (!detailPanel) return;
    const entry = currentNodeLookup.get(code);
    if (!entry) return;
    const { item, theme } = entry;
    const polarity = itemPolarity(theme, item);
    const related = (current.crossLinks || []).filter((link) => link.from === code || link.to === code);
    const displayLabel = item.displayLabel || code.replaceAll("_", " ");

    detailTheme.textContent = theme.title;
    detailTitle.textContent = displayLabel;
    detailMeaning.textContent = item.meaning;
    detailAnalytical.textContent = item.analyticalTerm || code.replaceAll("_", " ");
    detailAnalyticalRow.hidden = !item.displayLabel;
    detailContextPerson.textContent =
      item.literalSpeaker
        ? `Letterlijke formulering uit interview met ${item.literalSpeaker}`
        : current.id === "alle-interviews"
        ? "Gezamenlijke context: 9 bewoners en 4 zorgprofessionals"
        : `${current.name} — ${current.subtitle}`;
    detailContext.textContent =
      current.interviewContext || current.story;
    detailInfluence.textContent =
      polarity === "negative"
        ? "Remt de centrale variabele of vergroot de kwetsbaarheid."
        : "Ondersteunt de centrale variabele of maakt positieve verandering mogelijk.";
    detailCenter.textContent = current.center;
    detailSource.textContent = `Bron: ${current.source}`;
    detailRelations.innerHTML = "";

    related.forEach((link) => {
      const listItem = document.createElement("li");
      listItem.className = link.polarity === "negative" ? "negative" : "positive";
      listItem.textContent = relationText(link, code);
      detailRelations.appendChild(listItem);
    });
    detailRelationsSection.hidden = related.length === 0;

    if (stage?.querySelectorAll) {
      stage.querySelectorAll(".map-node").forEach((node) => {
        node.classList.toggle("selected", node.getAttribute("data-code") === code);
      });
    }
    highlightConnections(code);
    detailPanel.hidden = false;
  }

  function centerMarkup(map, center) {
    const title = wrapText(map.center, 31, 4);
    const story = wrapText(map.story, 52, 4);
    const leverage = wrapText(map.leverage, 46, 2);
    return `
      <g>
        <rect x="${center.x + 11}" y="${center.y + 13}" width="${center.w}" height="${center.h}" rx="24" fill="#1a1a2e" opacity="0.18"/>
        <rect x="${center.x}" y="${center.y}" width="${center.w}" height="${center.h}" rx="24" fill="#2b3990"/>
        <rect x="${center.x}" y="${center.y}" width="${center.w}" height="9" rx="5" fill="#e31e24"/>
        ${textLines(["CENTRALE VARIABELE"], center.x + 28, center.y + 34, {
          size: 10.5,
          weight: 850,
          fill: "#fae8e8"
        })}
        ${textLines(title, center.x + 28, center.y + 62, {
          size: 19,
          weight: 820,
          fill: "#ffffff",
          lineHeight: 23
        })}
        ${textLines(story, center.x + 28, center.y + 154, {
          size: 10,
          weight: 500,
          fill: "#dfe5f2",
          lineHeight: 12.5
        })}
        <rect x="${center.x + 20}" y="${center.y + center.h - 74}" width="${center.w - 40}" height="58" rx="12" fill="#e31e24" opacity="0.2"/>
        ${textLines(["HEFBOOM"], center.x + 32, center.y + center.h - 53, {
          size: 9.5,
          weight: 850,
          fill: "#fae8e8"
        })}
        ${textLines(leverage, center.x + 32, center.y + center.h - 35, {
          size: 10.3,
          weight: 650,
          fill: "#ffffff",
          lineHeight: 12.5
        })}
      </g>`;
  }

  function renderMap(map) {
    const center = { x: 726, y: 424, w: 348, h: 282 };
    const lookup = new Map();
    const renderedThemes = map.themes.map((theme, index) => {
      const region = regions[index];
      const items = itemLayout(theme, region);
      items.forEach((item) => {
        lookup.set(item.code, item);
        currentNodeLookup.set(item.code, { item, theme });
      });
      return { theme, region, items };
    });

    const regionsMarkup = renderedThemes
      .map(({ theme, region, items }) => {
        const tone = tones[theme.tone] || tones.strength;
        return `
          <g>
            <rect x="${region.x}" y="${region.y}" width="${region.w}" height="${region.h}" rx="46" fill="${tone.fill}" opacity="0.88"/>
            <rect x="${region.x + 28}" y="${region.y + 28}" width="11" height="32" rx="5" fill="${tone.accent}"/>
            ${textLines([theme.title], region.x + 52, region.y + 51, {
              size: 21,
              weight: 820,
              fill: "#35405a"
            })}
            ${textLines([`${items.length} onderwerp${items.length === 1 ? "" : "en"}`], region.x + region.w - 32, region.y + 49, {
              size: 10.5,
              weight: 750,
              fill: "#68738a",
              anchor: "end"
            })}
          </g>`;
      })
      .join("");

    let influenceIndex = 0;
    const influenceLines = renderedThemes
      .flatMap(({ theme, items }) =>
        items.map((item) =>
          lineToCenter(
            item,
            center,
            itemPolarity(theme, item),
            (tones[theme.tone] || tones.strength).line,
            influenceIndex++
          )
        )
      )
      .join("");

    const crossLinks = (map.crossLinks || []).map((link) => crossLink(link, lookup)).join("");
    const nodes = renderedThemes
      .flatMap(({ theme, items }) => items.map((item) => nodeMarkup(item, theme)))
      .join("");
    const privacy = map.privacy
      ? textLines([map.privacy], 1750, 1087, {
          size: 10.5,
          weight: 700,
          fill: "#a5161b",
          anchor: "end",
          italic: true
        })
      : "";

    const svg = `
      <svg xmlns="${NS}" viewBox="0 0 1800 1120" width="1800" height="1120" role="img" aria-labelledby="mapTitle mapDescription">
        <title id="mapTitle">${escapeXml(map.name)} – individuele systeemkaart</title>
        <desc id="mapDescription">${escapeXml(map.story)}</desc>
        <defs>
          <marker id="arrow-positive" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#81909f" opacity="0.65"/>
          </marker>
          <marker id="arrow-negative" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#e31e24" opacity="0.85"/>
          </marker>
          <marker id="cross-positive" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M 0 0 L 9 4.5 L 0 9 z" fill="#6f9d2d"/>
          </marker>
          <marker id="cross-negative" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M 0 0 L 9 4.5 L 0 9 z" fill="#e31e24"/>
          </marker>
        </defs>
        <rect width="1800" height="1120" fill="#fafafa"/>
        <rect width="1800" height="12" fill="#e31e24"/>
        ${textLines([`${map.id.startsWith("alle-interviews") ? "GEÏNTEGREERDE" : "INDIVIDUELE"} SYSTEEMKAART · ${map.group.toUpperCase()}`], 52, 42, {
          size: 11,
          weight: 900,
          fill: "#e31e24"
        })}
        ${textLines([map.name], 52, 81, {
          size: 34,
          weight: 850,
          fill: "#1a1a2e"
        })}
        ${textLines([map.subtitle], 52, 108, {
          size: 14,
          weight: 600,
          fill: "#69738a"
        })}
        ${textLines(["Bron", map.source], 1748, 50, {
          size: 10,
          weight: 750,
          fill: "#68738a",
          anchor: "end",
          lineHeight: 17
        })}
        ${regionsMarkup}
        <g aria-label="Invloed op de centrale variabele">${influenceLines}</g>
        <g aria-label="Belangrijke onderlinge relaties">${crossLinks}</g>
        <g aria-label="Onderwerpen">${nodes}</g>
        ${centerMarkup(map, center)}
        <g transform="translate(52 1030)">
          <rect width="1696" height="62" rx="18" fill="#ffffff" stroke="#dde2ea"/>
          <circle cx="29" cy="23" r="7" fill="#6f9d2d"/>
          ${textLines(["ondersteunt / maakt mogelijk"], 44, 27, { size: 11, weight: 700, fill: "#526078" })}
          <line x1="252" y1="23" x2="302" y2="23" stroke="#8d99a7" stroke-width="2.4" marker-end="url(#arrow-positive)"/>
          ${textLines(["invloed op centrale variabele"], 318, 27, { size: 11, weight: 700, fill: "#526078" })}
          <line x1="568" y1="23" x2="618" y2="23" stroke="#e31e24" stroke-width="2.5" stroke-dasharray="8 7" marker-end="url(#arrow-negative)"/>
          ${textLines(["remt / vergroot kwetsbaarheid"], 634, 27, { size: 11, weight: 700, fill: "#526078" })}
          ${textLines(["Interpretatie op basis van gecodeerde interviewanalyse; geen klinische beoordeling."], 1664, 27, {
            size: 10.5,
            weight: 620,
            fill: "#7a8498",
            anchor: "end"
          })}
          ${textLines(["Alle gecodeerde onderwerpen zijn één keer opgenomen."], 29, 48, {
            size: 10,
            weight: 600,
            fill: "#8a93a4"
          })}
        </g>
        ${privacy}
      </svg>`;

    stage.innerHTML = svg;
    closeDetails();
    document.title = `${map.name} – individuele systeemkaart`;
  }

  function renderControls() {
    const groups = [...new Set(maps.map((map) => map.group))];
    select.innerHTML = groups
      .map(
        (group) => `
          <optgroup label="${escapeXml(group)}">
            ${maps
              .filter((map) => map.group === group)
              .map(
                (map) =>
                  `<option value="${escapeXml(map.id)}"${map.id === current.id ? " selected" : ""}>${escapeXml(
                    map.name
                  )}</option>`
              )
              .join("")}
          </optgroup>`
      )
      .join("");

    index.innerHTML = maps
      .map(
        (map) => `
          <button type="button" data-map="${escapeXml(map.id)}" class="${map.id === current.id ? "active" : ""}">
            <strong>${escapeXml(map.name)}</strong>
            <span>${escapeXml(map.group)} · ${map.themes.reduce((total, theme) => total + theme.items.length, 0)} onderwerpen</span>
          </button>`
      )
      .join("");
  }

  function chooseMap(id, updateUrl = true) {
    const chosen = maps.find((map) => map.id === id);
    if (!chosen) return;
    current = chosen;
    currentNodeLookup = new Map();
    renderMap(current);
    renderControls();
    if (updateUrl && !exportMode) {
      const url = new URL(window.location.href);
      url.searchParams.set("map", current.id);
      window.history.replaceState({}, "", url);
    }
  }

  function downloadSvg() {
    const svg = stage.querySelector("svg");
    if (!svg) return;
    const source = `<?xml version="1.0" encoding="UTF-8"?>\n${svg.outerHTML}`;
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${current.id}-individuele-systeemkaart.svg`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  select.addEventListener("change", () => chooseMap(select.value));
  index.addEventListener("click", (event) => {
    const button = event.target.closest("[data-map]");
    if (button) chooseMap(button.dataset.map);
  });
  downloadButton.addEventListener("click", downloadSvg);
  if (stage?.addEventListener) {
    stage.addEventListener("click", (event) => {
      const node = event.target.closest?.(".map-node");
      if (node) openDetails(node.getAttribute("data-code"));
    });
    stage.addEventListener("keydown", (event) => {
      const node = event.target.closest?.(".map-node");
      if (node && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        openDetails(node.getAttribute("data-code"));
      }
    });
  }
  detailClose?.addEventListener("click", closeDetails);
  document.addEventListener?.("keydown", (event) => {
    if (event.key === "Escape") closeDetails();
  });

  renderMap(current);
  renderControls();
})();

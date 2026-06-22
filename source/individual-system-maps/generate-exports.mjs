import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const modulesRoot =
  process.env.CODEX_NODE_MODULES ||
  "C:\\Users\\max\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules";
const requireFromBundle = createRequire(path.join(modulesRoot, "_resolver.cjs"));
const sharp = requireFromBundle(
  path.join(modulesRoot, ".pnpm", "sharp@0.34.5", "node_modules", "sharp")
);

const dataCode = fs.readFileSync(path.join(here, "maps-data.js"), "utf8");
const appCode = fs.readFileSync(path.join(here, "app.js"), "utf8");
const svgDir = path.join(here, "svg");
const pngDir = path.join(here, "png");
fs.mkdirSync(svgDir, { recursive: true });
fs.mkdirSync(pngDir, { recursive: true });

function baseContext(search = "") {
  const elements = {
    "#mapStage": {
      innerHTML: "",
      querySelector() {
        return null;
      }
    },
    "#mapSelect": { innerHTML: "", value: "", addEventListener() {} },
    "#mapIndex": { innerHTML: "", addEventListener() {} },
    "#downloadSvg": { addEventListener() {} }
  };
  const document = {
    title: "",
    body: { classList: { add() {} } },
    querySelector(selector) {
      return elements[selector];
    },
    createElement() {
      return {
        style: {},
        click() {},
        remove() {},
        appendChild() {},
        set href(value) {},
        set download(value) {}
      };
    }
  };
  const window = {
    location: {
      search,
      href: `http://local.invalid/index.html${search}`
    },
    history: { replaceState() {} },
    URL,
    URLSearchParams
  };
  window.window = window;
  return {
    context: vm.createContext({
      window,
      document,
      URL,
      URLSearchParams,
      Blob,
      console,
      setTimeout,
      clearTimeout
    }),
    elements
  };
}

function readMaps() {
  const { context } = baseContext();
  vm.runInContext(dataCode, context, { filename: "maps-data.js" });
  return context.window.INDIVIDUAL_SYSTEM_MAPS;
}

function renderSvg(mapId) {
  const { context, elements } = baseContext(`?map=${encodeURIComponent(mapId)}&export=1`);
  vm.runInContext(dataCode, context, { filename: "maps-data.js" });
  vm.runInContext(appCode, context, { filename: "app.js" });
  return elements["#mapStage"].innerHTML;
}

const maps = readMaps();
const combined = maps.find((map) => map.id === "alle-interviews");
const sourceMaps = maps.filter((map) => !map.id.startsWith("alle-interviews"));
const manifest = [];
const contactTiles = [];

for (const map of maps) {
  const svg = renderSvg(map.id);
  const svgPath = path.join(svgDir, `${map.id}.svg`);
  const pngPath = path.join(pngDir, `${map.id}.png`);
  fs.writeFileSync(svgPath, `<?xml version="1.0" encoding="UTF-8"?>\n${svg}`, "utf8");
  await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9 })
    .toFile(pngPath);
  const topicCount = map.themes.reduce((total, theme) => total + theme.items.length, 0);
  manifest.push({
    id: map.id,
    group: map.group,
    name: map.name,
    topics: topicCount,
    svg: `svg/${map.id}.svg`,
    png: `png/${map.id}.png`
  });
  const tile = await sharp(pngPath).resize(440, 274, { fit: "contain", background: "#ffffff" }).png().toBuffer();
  contactTiles.push(tile);
}

const combinedLabels = new Map(
  combined.themes.flatMap((theme) => theme.items.map((item) => [item.code, item.meaning]))
);

function classifyCombinedVariable(map, theme, item) {
  const key = `${map.id} ${item.code} ${item.meaning}`.toUpperCase();
  const directRules = [
    ["MEDISCHE_REGELS", /(MEDICATIE|INDICATIE|EPILEPSIE)/],
    ["VEILIGHEID_VERANTWOORDELIJKHEID", /(TRIAGE|SIGNALERING|VERANTWOORDELIJKHEID|CONFLICT)/],
    ["ZORGDRUK", /(VERSNIPPERING|WERKDRUK|PERSONEELSTEKORT|CHAOS)/],
    ["BEZUINIGING_BUREAUCRATIE", /(BEZUINIGING|BUREAUCRATIE|REGISTRATIELAST|VISIELOOSHEID|OVERBEHANDELING|SPAGAAT|BUDGET)/],
    ["ERKENNING_ROL", /(UITFASERING|AFDELING|POSITIE|PENSIOEN|BEELDVORMING|NAAMGEVING)/],
    ["SAMENWERKING_MIDDELEN", /(WIJKVERBINDING|SAMENWERKING|ONGEHOORZAAMHEID|STILTERUIMTE|BETROKKENHEID|JONGEREN)/],
    ["LICHAMELIJK_VERLIES", /(ONGELUK|LICHAAM|VAL|LETSEL|VERLAM|LICHAMELIJK)/],
    ["COMMUNICATIE_COGNITIE", /(AFASIE|GEHEUGEN|COGNIT|WOORDEN)/],
    ["ROUW_EENZAAMHEID", /(ROUW|EENZAAMHEID|OVERLEDEN|VERLIES)/],
    ["ANGST_TERUGTREKKING", /(ANGST|AFWEER|KRENKING|BINNEN|GEVOELENS|BUURT|TERUGTREK)/],
    ["AFHANKELIJKHEID", /(AFHANKELIJKHEID|AFHANKELIJK|NIET ZELF)/],
    ["DEELNAME_BUITEN", /(BUITEN|REIZEN|DEELNAME|WANDEL|STAD|WIJK EN STAD)/],
    ["WENSEN", /(VEILING|UITJE|DIERENTUIN|VISSEN|TREINEN|DROOM|WENS)/],
    ["FAMILIEVERBINDING", /(FAMILIE|KINDEREN|ECHTGENOTE|VRIENDIN|VRIEND|MAN|GROOTOUDERS)/],
    ["GEHOORD_WORDEN", /(GEHOORD|LUISTER|SERIEUS GENOMEN)/],
    ["VERTROUWDE_RELATIES", /(CAMILLE|VERTROUWEN|VERTROUWD)/],
    ["WEDERKERIGHEID", /(WAARDERING|JEUGD|GEMAK|OPVOEDING|WEDERKER)/],
    ["MAATWERK", /(IDENTITEIT|ERKENNING|VERZORGING|MAATWERK|TATOEAGE)/],
    ["ZINGEVING", /(GELOOF|ZINGEVING|ETHIEK|LEVENSEINDE|LIEFDE|VRIJPLAATS)/],
    ["DAGELIJKS_RITME", /(MUZIEK|SPORT|NIEUWS|ETEN|KOKEN|MOPPEREN)/],
    ["COMPETENTIE", /(MODELBOUW|BREIEN|HANDWERK|MAKEN|BEZIGHEID|MOESTUIN|ONDERWIJS|SCHEIKUNDE)/],
    ["AUTONOMIE", /(AUTONOMIE|ALLEEN|ZELFSTANDIGHEID|RESPECT|TEVREDENHEID|AANPASSING)/],
    ["PROFESSIONELE_PASSIE", /(PASSIE|BEHOUD|LOOPBAAN|TROTS)/],
    ["VAKIDENTITEIT", /(BLOEMEN|HANDEL|SCHEEPSBOUW|VAK|BEROEP)/]
  ];

  if (map.group === "Zorgprofessionals" && item.code === "IDENTITEIT") return "ERKENNING_ROL";
  if (map.id === "identiteit" && ["IDENTITEIT", "VERZORGING", "ERKENNING"].includes(item.code)) return "MAATWERK";
  for (const [variable, pattern] of directRules) {
    if (pattern.test(key)) return variable;
  }
  if (map.group === "Zorgprofessionals") {
    if (theme.tone === "barrier") return "ZORGDRUK";
    if (theme.tone === "opportunity") return "SAMENWERKING_MIDDELEN";
    return "PROFESSIONELE_PASSIE";
  }
  if (theme.tone === "barrier") return "ROUW_EENZAAMHEID";
  if (theme.tone === "opportunity") return "WENSEN";
  if (theme.tone === "relation") return "VERTROUWDE_RELATIES";
  return "VAKIDENTITEIT";
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

const coverageRows = [
  ["Interviewgroep", "Persoon", "Broncode", "Betekenis", "Gecombineerde variabele", "Variabelebetekenis"]
];
for (const map of sourceMaps) {
  for (const theme of map.themes) {
    for (const item of theme.items) {
      const variable = classifyCombinedVariable(map, theme, item);
      coverageRows.push([
        map.group,
        map.name,
        item.code,
        item.meaning,
        variable,
        combinedLabels.get(variable)
      ]);
    }
  }
}
fs.writeFileSync(
  path.join(here, "combined-map-evidence-traceability.csv"),
  coverageRows.map((row) => row.map(csvCell).join(",")).join("\r\n"),
  "utf8"
);

const columns = 4;
const tileWidth = 450;
const tileHeight = 284;
const rows = Math.ceil(contactTiles.length / columns);
await sharp({
  create: {
    width: columns * tileWidth,
    height: rows * tileHeight,
    channels: 4,
    background: "#eef0f4"
  }
})
  .composite(
    contactTiles.map((input, index) => ({
      input,
      left: (index % columns) * tileWidth + 5,
      top: Math.floor(index / columns) * tileHeight + 5
    }))
  )
  .png({ compressionLevel: 9 })
  .toFile(path.join(here, "contact-sheet.png"));

fs.writeFileSync(
  path.join(here, "manifest.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      mapCount: maps.length,
      individualMapCount: sourceMaps.length,
      originalCodedSubjectCount: coverageRows.length - 1,
      combinedVariableCount: combined.themes.reduce((total, theme) => total + theme.items.length, 0),
      maps: manifest
    },
    null,
    2
  ),
  "utf8"
);

console.log(`Generated ${maps.length} SVG maps, ${maps.length} PNG maps, and contact-sheet.png.`);

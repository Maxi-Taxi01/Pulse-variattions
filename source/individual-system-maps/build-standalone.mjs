import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const directory = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(directory, "index.html"), "utf8");
const css = fs.readFileSync(path.join(directory, "styles.css"), "utf8");
const data = fs.readFileSync(path.join(directory, "maps-data.js"), "utf8");
const app = fs.readFileSync(path.join(directory, "app.js"), "utf8");

const combinedOnlyData = data.replace(
  "window.INDIVIDUAL_SYSTEM_MAPS = [",
  "window.INDIVIDUAL_SYSTEM_MAPS = ["
);

const standalone = html
  .replace('<link rel="stylesheet" href="styles.css" />', `<style>\n${css}\n</style>`)
  .replace(
    '<script src="maps-data.js"></script>\n    <script src="app.js"></script>',
    `<script>\n${combinedOnlyData}\n</script>\n    <script>\n${app}\n</script>`
  )
  .replace(
    "<title>Individuele systeemkaarten – bewoners en zorgprofessionals</title>",
    "<title>Alle interviews – interactieve systeemkaart</title>"
  )
  .replace(
    "<h1>Individuele systeemkaarten</h1>",
    "<h1>Alle interviews – interactieve systeemkaart</h1>"
  );

fs.writeFileSync(
  path.join(directory, "Combined_System_Map_Interactive.html"),
  standalone,
  "utf8"
);

console.log("Created Combined_System_Map_Interactive.html");

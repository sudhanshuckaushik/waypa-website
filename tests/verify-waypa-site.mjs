import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const requiredFiles = ["index.html", "styles.css", "script.js"];
const assetFiles = [
  "logo-main.png",
  "card-next-leaders.jpg",
  "card-healthcare.jpg",
  "card-democracy.jpg",
  "leader-abdoulie.jpg",
  "leader-leo.jpg",
  "leader-sia.jpg",
  "leader-fofana.jpg",
  "leader-promise.jpg",
  "leader-matarr.jpg",
];

const failures = [];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    failures.push(`Missing required file: ${file}`);
  }
}

for (const file of assetFiles) {
  if (!existsSync(join(root, "assets", file))) {
    failures.push(`Missing asset: assets/${file}`);
  }
}

const htmlPath = join(root, "index.html");
const cssPath = join(root, "styles.css");
const jsPath = join(root, "script.js");

const html = existsSync(htmlPath) ? readFileSync(htmlPath, "utf8") : "";
const css = existsSync(cssPath) ? readFileSync(cssPath, "utf8") : "";
const js = existsSync(jsPath) ? readFileSync(jsPath, "utf8") : "";

const requiredHtmlSnippets = [
  "<title>WAYPA | West Africa Young Parliamentarians Network</title>",
  'id="vision"',
  'id="programs"',
  'id="essence"',
  'id="leadership"',
  'id="contact"',
  'aria-label="Primary navigation"',
  'aria-expanded="true"',
  'alt="WAYPA logo"',
  "The Next Leaders",
  "Youth Health &amp; SRHR Campaign",
  "Youth Democracy Watch",
  "H.E. Abdoulie Njai",
  "Amb. Leo E. Tiah",
  "secretariat@waypa.org",
];

for (const snippet of requiredHtmlSnippets) {
  if (!html.includes(snippet)) {
    failures.push(`Missing HTML snippet: ${snippet}`);
  }
}

const forbiddenPhrases = [
  "Future Energy",
  "An intelligent, resilient grid",
  "Capturing the sun at scale",
  "AI and quantum",
  "Test Modal",
  "SideDrawer",
  "CLICK",
  "hello@waypa.org",
  "press@waypa.org",
];

for (const phrase of forbiddenPhrases) {
  if (html.includes(phrase) || css.includes(phrase) || js.includes(phrase)) {
    failures.push(`Forbidden leftover phrase found: ${phrase}`);
  }
}

const requiredCssSnippets = [
  "--bg: #eae6de",
  "--yellow: #f2d04c",
  ".scroller",
  ".snap-card",
  "@media (max-width: 760px)",
  "@media (prefers-reduced-motion: reduce)",
];

for (const snippet of requiredCssSnippets) {
  if (!css.includes(snippet)) {
    failures.push(`Missing CSS snippet: ${snippet}`);
  }
}

const requiredJsSnippets = [
  "querySelectorAll",
  "aria-expanded",
  "IntersectionObserver",
  "nav-scrolled",
];

for (const snippet of requiredJsSnippets) {
  if (!js.includes(snippet)) {
    failures.push(`Missing JS snippet: ${snippet}`);
  }
}

if (failures.length > 0) {
  console.error("WAYPA site verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("WAYPA site verification passed.");

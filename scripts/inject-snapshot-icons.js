// Adds a small inline-SVG icon before each label in every course page's
// "Course Snapshot" hero-facts list (Duration, Mode, Level, Prerequisite,
// Projects, Certification). Inline SVG = crisp at any size, no extra image
// requests, inherits color via currentColor, no image-generation credits
// needed. Idempotent: skips a line that's already been iconized.
const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..", "public", "courses");

const ICONS = {
  "Duration": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  "Mode": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  "Level": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V12M11 20V6M18 20v-4"/></svg>`,
  "Prerequisite": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l2 2 4-4"/><rect x="3" y="4" width="18" height="16" rx="2"/></svg>`,
  "Projects": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>`,
  "Certification": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="5"/><path d="M8.5 12.5L7 21l5-3 5 3-1.5-8.5"/></svg>`,
};

let filesTouched = 0, rowsTouched = 0;

for (const file of fs.readdirSync(DIR)) {
  if (!file.endsWith(".html")) continue;
  const fp = path.join(DIR, file);
  let html = fs.readFileSync(fp, "utf8");
  let changed = false;

  for (const [label, svg] of Object.entries(ICONS)) {
    // Matches: <li><span>Duration</span><span>...</span></li>  (not already iconized)
    const re = new RegExp(`<li><span>${label}</span>`, "g");
    if (re.test(html)) {
      html = html.replace(
        new RegExp(`<li><span>${label}</span>`, "g"),
        `<li><span class="fact-label">${svg}${label}</span>`
      );
      changed = true;
      rowsTouched++;
    }
  }

  if (changed) {
    fs.writeFileSync(fp, html, "utf8");
    filesTouched++;
    console.log("Updated:", file);
  }
}

console.log(`\nDone. ${filesTouched} files updated, ${rowsTouched} snapshot rows iconized.`);

const fs = require('fs');

const reportPath = 'C:\\Users\\Admin\\AppData\\Local\\Temp\\chrome-devtools-mcp-uhJMHK\\report.json';
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

console.log('Course page failed audits:');
for (const [key, audit] of Object.entries(report.audits)) {
  if (audit.score !== null && audit.score < 1) {
    console.log(`- [${key}] Score: ${audit.score} | Title: ${audit.title}`);
    if (audit.explanation) console.log(`  Explanation: ${audit.explanation}`);
  }
}

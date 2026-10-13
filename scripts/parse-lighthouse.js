const fs = require('fs');

const reportPath = 'C:\\Users\\Admin\\AppData\\Local\\Temp\\chrome-devtools-mcp-WuvIAR\\report.json';
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

console.log('Audits with score < 1 or failed:');
for (const [key, audit] of Object.entries(report.audits)) {
  if (audit.score !== null && audit.score < 1) {
    console.log(`- [${key}] Score: ${audit.score} | Title: ${audit.title}`);
    if (audit.explanation) console.log(`  Explanation: ${audit.explanation}`);
    if (audit.displayValue) console.log(`  Display: ${audit.displayValue}`);
    if (audit.details && audit.details.items) {
      console.log(`  Items: ${audit.details.items.length}`);
      console.log('  Sample item:', JSON.stringify(audit.details.items[0]).substring(0, 150));
    }
  }
}

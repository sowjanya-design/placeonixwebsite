const fs = require('fs');
const courses = JSON.parse(fs.readFileSync('web-next/src/data/courses.json', 'utf8'));
let headings = [];
courses.forEach(c => {
  if (c.intro) headings.push(c.intro.heading);
  if (c.demand) headings.push(c.demand.heading);
  if (c.audience) headings.push(c.audience.heading);
  if (c.topics) headings.push(c.topics.heading);
  if (c.certification) headings.push(c.certification.heading);
});
const duplicates = headings.filter((item, index) => headings.indexOf(item) !== index);
console.log("Duplicate Headings in courses:", duplicates.length);

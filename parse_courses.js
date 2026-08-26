const fs = require('fs');
const courses = JSON.parse(fs.readFileSync('web-next/src/data/courses.json', 'utf8'));
const h1s = courses.map(c => c.h1).filter(Boolean);
const duplicates = h1s.filter((item, index) => h1s.indexOf(item) !== index);
console.log("Duplicate H1s:", duplicates);

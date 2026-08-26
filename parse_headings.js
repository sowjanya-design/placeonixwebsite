const fs = require('fs');
const page = fs.readFileSync('web-next/src/app/page.tsx', 'utf8');
const homeJson = JSON.parse(fs.readFileSync('web-next/src/data/home.json', 'utf8'));

console.log("H1:", homeJson.hero.h1.replace(/<[^>]+>/g, ''));
console.log("H2: Your Journey Starts Here");
homeJson.visCards.forEach(c => console.log("H3:", c.title));
console.log("H2: Flagship Premium Programs");
console.log("H3: SAP Courses");
console.log("H3: Technology Courses");
console.log("H3: Combo Programs");
console.log("H2: Enrollment to Employment");
homeJson.processSteps.forEach(s => console.log("H4:", s.title));
console.log("H2:", homeJson.internship.heading);
console.log("H3: Internship Tracks");
console.log("H2: The Certificate You'll Earn");
console.log("H2: Experienced Trainers From Top Companies");
console.log("H2:", homeJson.contact.heading);
console.log("H2: Frequently Asked Questions");

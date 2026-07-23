
const fs = require('fs');
let css = fs.readFileSync('web-next/src/app/home.css', 'utf8');
css = css.replace(/#home-scope /g, '');
fs.writeFileSync('web-next/src/app/home.css', css);
console.log('Unscoped');


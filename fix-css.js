
const fs = require('fs');
let css = fs.readFileSync('web-next/src/app/home.css', 'utf8');

// Target the specific tags that are causing global conflicts
css = css.replace(/^(\s*)nav \{/gm, '#home-scope nav {');
css = css.replace(/^(\s*)section \{/gm, '#home-scope section {');
css = css.replace(/^(\s*)header \{/gm, '#home-scope header {');
css = css.replace(/^(\s*)footer \{/gm, '#home-scope footer {');

fs.writeFileSync('web-next/src/app/home.css', css);
console.log('Fixed CSS safely');


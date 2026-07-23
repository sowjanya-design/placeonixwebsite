
const fs = require('fs');
let css = fs.readFileSync('web-next/src/app/home.css', 'utf8');

// Split by blocks and prefix selectors
let inMedia = false;

function prefixSelectors(selectorText) {
    return selectorText.split(',').map(s => {
        let trimmed = s.trim();
        // Skip empty, keyframes percentages, and already scoped
        if (!trimmed || trimmed.endsWith('%') || trimmed.startsWith('from') || trimmed.startsWith('to') || trimmed.startsWith('#home-scope') || trimmed.startsWith(':root') || trimmed.startsWith('html') || trimmed.startsWith('body')) {
            return s;
        }
        return '#home-scope ' + trimmed;
    }).join(', ');
}

// A simple parser
let result = '';
let buffer = '';
for (let i = 0; i < css.length; i++) {
    let char = css[i];
    if (char === '{') {
        let sel = buffer.trim();
        if (sel.startsWith('@')) {
            result += sel + ' {';
        } else {
            result += prefixSelectors(sel) + ' {';
        }
        buffer = '';
    } else if (char === '}') {
        result += buffer + '}';
        buffer = '';
    } else {
        buffer += char;
    }
}
result += buffer;

fs.writeFileSync('web-next/src/app/home.css', result);
console.log('Scoping done');


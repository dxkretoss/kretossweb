const fs = require('fs');
let content = fs.readFileSync('src/data/portfoliodetails.js', 'utf8');
content = content.replace(/^[ \t]*"id": \d+,\r?\n/gm, '');
fs.writeFileSync('src/data/portfoliodetails.js', content);
console.log('Removed all id keys');

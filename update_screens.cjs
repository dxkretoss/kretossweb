const fs = require('fs');
const file = fs.readFileSync('src/data/portfoliodetails.js', 'utf8');

const prefixMap = {
  'my100days': '/portfolio/mobile-app/my-100-days/portfolio_md_',
  'wingman': '/portfolio/mobile-app/wingman/portfolio_wn_',
  'book-builder': '/portfolio/mobile-app/bookbuilder/portfolio_bb_',
  'klubbrabatten-mob': '/portfolio/mobile-app/Klubbrabatten/portfolio_klub_',
  'roamaly-app': '/portfolio/mobile-app/roamaly/portfolio_roamaly_',
  'sion': '/portfolio/mobile-app/sion/portfolio_sion_',
  'city2city': '/portfolio/mobile-app/city2city/portfolio_city2city_',
  'drawn': '/portfolio/mobile-app/drawn/portfolio_drawn_',
  'somnexis': '/portfolio/mobile-app/somnexis/portfolio_somnexis_',
  'traivend': '/portfolio/mobile-app/traivend/portfolio_traivend_',
  'offarat': '/portfolio/mobile-app/offarat/portfolio_offarat_',
  'kolderkiduniverse': '/portfolio/mobile-app/kolderkiduniverse/portfolio_kolderkiduniverse_'
};

let result = file;
for (const slug in prefixMap) {
  const prefix = prefixMap[slug];
  const newArray = [1,2,3,4,5,6,7,8].map(i => `\n            "${prefix}${i}.png"`).join(',') + '\n        ';
  const regex = new RegExp(`("slug": "${slug}"[\\s\\S]*?"mobileScreens": \\[)[^\\]]+(\\])`, 'g');
  result = result.replace(regex, (match, p1, p2) => p1 + newArray + p2);
}

fs.writeFileSync('src/data/portfoliodetails.js', result);
console.log('Done');

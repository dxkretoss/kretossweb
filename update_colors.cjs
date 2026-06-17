const fs = require('fs');
let file = fs.readFileSync('src/components/JobApplicationPage.jsx', 'utf8');

// 1. Replace all simple orange colors with the light blue
file = file.replaceAll('#ff6b35', '#44c7f6');

// 2. Replace the submit button gradient and shadow
file = file.replaceAll(
    'bg-gradient-to-r from-[#ff8c42] to-[#f45d22] hover:from-[#f45d22] hover:to-[#ff8c42] text-white font-bold py-4 rounded-md transition-all shadow-[0_4px_14px_0_rgba(255,107,53,0.39)]', 
    'bg-gradient-to-r from-[#44c7f6] to-[#0037f0] hover:from-[#0037f0] hover:to-[#44c7f6] text-white font-bold py-4 rounded-md transition-all shadow-[0_4px_14px_0_rgba(68,199,246,0.39)]'
);

// 3. Make the "Job Application" header text use the gradient instead of solid blue
file = file.replace(
    '<span className="text-[#44c7f6]">Job Application</span>', 
    '<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44c7f6] to-[#0037f0]">Job Application</span>'
);

fs.writeFileSync('src/components/JobApplicationPage.jsx', file);
console.log('Colors updated');

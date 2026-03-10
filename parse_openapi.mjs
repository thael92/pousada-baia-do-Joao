import fs from 'fs';
const apiDetail = JSON.parse(fs.readFileSync('api-1.json', 'utf8'));
const paths = Object.keys(apiDetail.paths);
let result = '';
for (const p of paths) {
    const methods = Object.keys(apiDetail.paths[p]);
    methods.forEach(m => {
        result += `${m.toUpperCase()} ${p} - ${apiDetail.paths[p][m].summary || 'No summary'}\n`;
    });
}
fs.writeFileSync('endpoints_out.txt', result, 'utf8');

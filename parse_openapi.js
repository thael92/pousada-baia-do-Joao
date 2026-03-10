const fs = require('fs');
const apiDetail = JSON.parse(fs.readFileSync('api-1.json', 'utf8'));
const paths = Object.keys(apiDetail.paths);
for (const p of paths) {
    const methods = Object.keys(apiDetail.paths[p]);
    methods.forEach(m => {
        console.log(`${m.toUpperCase()} ${p} - ${apiDetail.paths[p][m].summary || 'No summary'}`);
    });
}

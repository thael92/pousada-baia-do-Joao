import fs from 'fs';
const apiDetail = JSON.parse(fs.readFileSync('api-1.json', 'utf8'));
const pathObj = apiDetail.paths['/api/v2/{account_id}/place_types/{place_type_id}/rates_and_availabilities'];
console.log(JSON.stringify(pathObj, null, 2));

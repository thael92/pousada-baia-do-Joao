import fetch from 'node-fetch';

const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI3NjE3OCwianRpIjoiYWExODdhYTVlYThhZDRhOCIsImlhdCI6MTc3MjQ3MjQ4NywiZXhwIjoxNzcyOTA0NDg3fQ.X5aHs9uaTsw9F4XzTybf0No4E2gQOYsuQ1bBoQKfTFA";

const account_ids = ['pousada-baia-do-joao', 'pousada-baia-do-Joao', '276178'];

async function testURLs() {
    for (const account_id of account_ids) {
        const url = `https://pms.hospedin.com/api/v2/${account_id}/my_account`;
        try {
            console.log(`Testing ${url}`);
            const res = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${TOKEN}`
                }
            });
            console.log(`Status: ${res.status}`);
            const text = await res.text();
            console.log(`Response: ${text.substring(0, 100)}`);
        } catch (e) {
            console.log(`Error: ${e.message}`);
        }
    }
}

testURLs();

import fs from 'fs';
import path from 'path';
import { createClient } from 'microcms-js-sdk';

//ANCHOR - Configs
const CONFIG = {
    serviceDomain: 'osaru07m',
    apiKey: '2tF1gQQgfqsfoe5w5vWCQGlxqFi6qpiEWiUV',
    outputDir: 'src/data',
};

const endpoints = [
    {
        name: 'works',
        queries: { orders: '-start_at' },
    },
    {
        name: 'releases',
        queries: { orders: '-start_at' }
    },
    {
        name: 'feeds'
    },
];

const client = createClient({
    serviceDomain: CONFIG.serviceDomain,
    apiKey: CONFIG.apiKey,
});

//ANCHOR - Core function
async function fetchAndSave(endpoint: string, queries = {}) {
    try {
        const data = await client.getAllContents({
            endpoint,
            queries,
        });

        const filePath = path.join(
            process.cwd(),
            CONFIG.outputDir,
            `${endpoint}.json`
        );

        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        console.log(`✅ microCMS [${endpoint}] saved: ${filePath}`);
    } catch (err) {
        console.error(`⚠️ microCMS [${endpoint}] error:`, err);
        throw err;
    }
}

//ANCHOR - main function
async function main() {
    for (const ep of endpoints) {
        await fetchAndSave(ep.name, ep.queries);
    }
}

main().catch((err) => {
    console.error('❌ batch failed:', err);
    process.exit(1);
});

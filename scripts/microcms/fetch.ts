import Config from '@/config'
import { client } from '@/libs/microcms/client'
import fs from 'fs'
import path from 'path'
import { exit } from 'process'

const Apis = [
    {
        endpoint: 'news',
        queries: {
            orders: '-start_at'
        }
    },
    {
        endpoint: 'works',
        queries: {
            orders: '-start_at'
        }
    }
];

async function getAllContents(endpoint: string, queries = {}) {
    try {
        return await client.getAllContents({
            endpoint,
            queries
        });
    }
    catch (err) {
        console.error(`microCMS \'${endpoint}\' fetch error:`, err);
    }
}

async function saveToFile(endpoint: string, data: unknown) {
    if (!Config.microcms.dataDir) {
        console.error('Not defined Config: \'microcms.dataDir\'');
        exit(1);
    }

    const Filepath = path.join(
        process.cwd(),
        Config.microcms.dataDir,
        `${endpoint}.json`
    );

    fs.mkdirSync(path.dirname(Filepath), { recursive: true });
    fs.writeFileSync(Filepath, JSON.stringify(data, null, 2));

    console.info(`microCMS \'${endpoint}\' fetched and saved successfully: ${Filepath}`);
}

async function main() {
    for (const Api of Apis) {
        const Data = await getAllContents(Api.endpoint, Api.queries);
        await saveToFile(Api.endpoint, Data);
    }
}

main().catch((err) => {
    console.error('batch failed:', err);
    exit(1);
});

import Config from "@/config";
import { createClient } from "microcms-js-sdk";
import { exit } from "process";

if (
    !Config.microcms.domain ||
    !Config.microcms.apiKey
) {
    console.error('Not defined config: \'microcms.domain\' and \'microcms.apiKey\'');
    exit(1);
}

export const client = createClient({
    serviceDomain: Config.microcms.domain,
    apiKey: Config.microcms.apiKey,
});

import { Config } from "@/config";
import Parser from "rss-parser";
import { string2date } from "@/utils/helpers";

export async function getArticles() {
    const parser = new Parser();


    const items = await Promise.all(
        Config.feeds.map(async (feed) => {
            const parsed = await parser.parseURL(feed.url);

            return parsed.items.map((item) => ({
                title: item.title ?? '',
                link: item.link ?? '',
                pubDate: string2date(item.pubDate),
                source: feed.name,
                favicon: `https://www.google.com/s2/favicons?sz=64&domain=${new URL(item.link ?? '').hostname}`,
            }));
        })
    );

    const articles = items.flat();

    articles.sort((a, b) => {
        return new Date(b.pubDate ?? 0).getTime() - new Date(a.pubDate ?? 0).getTime();
    })

    return articles;
}

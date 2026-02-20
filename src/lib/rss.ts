import Parser from 'rss-parser'
import { SiteConfig } from '@/site.config'
import { Article } from '@/types'

const parser = new Parser()

export async function getArticles(limit?: number): Promise<Article[]> {
    const feeds = await Promise.all(
        SiteConfig.feeds.map(async (feed) => {
            const parsed = await parser.parseURL(feed.url);

            return parsed.items.map((item) => ({
                title: item.title ?? '',
                link: item.link ?? '',
                pubDate: item.pubDate,
                source: feed.name,
            }));
        })
    );

    const merged = feeds.flat();

    merged.sort((a, b) => {
        return new Date(b.pubDate ?? 0).getTime() - new Date(a.pubDate ?? 0).getTime();
    })

    if (limit) {
        return merged.slice(0, limit);
    }

    return merged;
}

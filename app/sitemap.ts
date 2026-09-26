import type { MetadataRoute } from "next";

import NewsData from "../feature/news/data";
import WorkData from "../feature/works/data";

const SITE_URL = "https://osaru07m.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/news/`,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/works/`,
            lastModified: new Date(),
        },
    ];

    const newsPages: MetadataRoute.Sitemap = NewsData.map((news) => ({
        url: `${SITE_URL}/news/${news.id}/`,
        lastModified: new Date(news.revisedAt),
    }));

    const workPages: MetadataRoute.Sitemap = WorkData.map((work) => ({
        url: `${SITE_URL}/works/${work.id}/`,
        lastModified: new Date(work.updatedAt),
    }));

    return [
        ...staticPages,
        ...newsPages,
        ...workPages,
    ];
}

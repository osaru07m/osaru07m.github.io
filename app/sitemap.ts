import type { MetadataRoute } from "next";

import NewsData from "@/feature/news/data";
import WorkData from "@/feature/works/data";

export const dynamic = "force-static";

const SITE_URL = "https://osaru07m.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
        },
        {
            url: `${SITE_URL}/news/`,
        },
        ...NewsData.map((news) => ({
            url: `${SITE_URL}/news/${news.id}/`,
            lastModified: new Date(news.revisedAt),
        })),

        {
            url: `${SITE_URL}/works/`,
        },

        ...WorkData.map((work) => ({
            url: `${SITE_URL}/works/${work.id}/`,
            lastModified: new Date(work.revisedAt),
        })),
    ];
}

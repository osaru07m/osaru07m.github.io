import { News } from "@/feature/news/types/news";
import { Article, CollectionPage, WithContext } from "schema-dts";

export function newsListJsonLd(
    newsList: News[]
): WithContext<CollectionPage> {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "お知らせ",
        url: "https://osaru07m.github.io/news/",
        mainEntity: {
            "@type": "ItemList",
            itemListElement: newsList.map((news, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: news.title,
                url: `https://osaru07m.github.io/news/${news.id}/`,
            })),
        },
    };
}

export function newsJsonLd(
    news: News
): WithContext<Article> {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `https://osaru07m.github.io/news/${news.id}/#news`,
        headline: news.title,
        datePublished: news.publishedAt.toISOString(),
        dateModified: news.revisedAt.toISOString(),
        url: `https://osaru07m.github.io/news/${news.id}/`,
        author: {
            "@id": "https://osaru07m.github.io/#person",
        }
    };
}

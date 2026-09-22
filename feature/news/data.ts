import RawData from "@/src/data/news.json";
import { News, RawNews } from "./types/news";

const NewsData: News[] = RawData.map((rawNews: RawNews) => ({
    ...rawNews,
    createdAt: new Date(rawNews.createdAt),
    updatedAt: new Date(rawNews.updatedAt),
    publishedAt: new Date(rawNews.publishedAt),
    revisedAt: new Date(rawNews.revisedAt),
    category: {
        ...rawNews.category,
        createdAt: new Date(rawNews.category.createdAt),
        updatedAt: new Date(rawNews.category.updatedAt),
        publishedAt: new Date(rawNews.category.publishedAt),
        revisedAt: new Date(rawNews.category.revisedAt),
    }
}));

export default NewsData;

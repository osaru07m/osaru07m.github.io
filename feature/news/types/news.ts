import { RawDate, RawId, RawImage } from "@/feature/microcms";
import { Category, RawCategory } from "./category";

// Raw data
export type RawNews = {
    id: RawId
    createdAt: RawDate
    updatedAt: RawDate
    publishedAt: RawDate
    revisedAt: RawDate
    title: string
    content: string
    category: RawCategory
    thumbnail?: RawImage
}

// Transformed data
export type News = {
    id: RawId
    createdAt: Date
    publishedAt: Date
    revisedAt: Date
    title: string
    content: string
    category: Category
    thumbnail?: RawImage
}

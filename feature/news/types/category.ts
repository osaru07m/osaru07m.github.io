import { RawDate, RawId } from "@/feature/microcms";

// Raw data
export type RawCategory = {
    id: RawId
    createdAt: RawDate
    updatedAt: RawDate
    publishedAt: RawDate
    revisedAt: RawDate
    name: string
}

// Transformed data
export type Category = {
    id: RawId
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    revisedAt: Date
    name: string
}

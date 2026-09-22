import { RawDate, RawId } from "@/feature/microcms";

// Raw data
export type RawClient = {
    id: RawId
    createdAt: RawDate
    updatedAt: RawDate
    publishedAt: RawDate
    revisedAt: RawDate
    name: string
    url?: string
    isHonorificEnabled: boolean
}

// Transformed data
export type Client = {
    id: RawId
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    revisedAt: Date
    name: string
    url?: string
    isHonorificEnabled: boolean
}

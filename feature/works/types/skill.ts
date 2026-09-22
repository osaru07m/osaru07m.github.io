import { RawDate, RawId } from "@/feature/microcms";

// Raw data
export type RawSkill = {
    id: RawId
    createdAt: RawDate
    updatedAt: RawDate
    publishedAt: RawDate
    revisedAt: RawDate
    value: string
    category: string[]
}

// Transformed data
export type Skill = {
    id: RawId
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    revisedAt: Date
    value: string
    category: string[]
}

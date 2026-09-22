import { RawDate, RawId, RawImage } from "@/feature/microcms";
import { Client, RawClient } from "./client";
import { RawSkill, Skill } from "./skill";

// Raw data
export type RawWork = {
    id: RawId
    createdAt: RawDate
    updatedAt: RawDate
    publishedAt: RawDate
    revisedAt: RawDate
    title: string
    intro: string
    startAt: RawDate
    client: RawClient | null
    isUndisclosedClient: boolean
    description: string
    mainVisual?: RawImage
    skills: RawSkill[]
}

// Transformed data
export type Work = {
    id: RawId
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    revisedAt: Date
    title: string
    intro: string
    startAt: Date
    client: Client | null
    isUndisclosedClient: boolean
    description: string
    mainVisual?: RawImage
    skills: Skill[]
}

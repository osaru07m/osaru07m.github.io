import RawData from "@/src/data/works.json";
import { RawWork, Work } from "./types/work";
import { RawSkill } from "./types/skill";

const WorkData: Work[] = RawData.map((rawWork: RawWork) => ({
    ...rawWork,
    createdAt: new Date(rawWork.createdAt),
    updatedAt: new Date(rawWork.updatedAt),
    publishedAt: new Date(rawWork.publishedAt),
    revisedAt: new Date(rawWork.revisedAt),
    startAt: new Date(rawWork.startAt),
    client: rawWork.client
        ? {
            ...rawWork.client,
            createdAt: new Date(rawWork.client.createdAt),
            updatedAt: new Date(rawWork.client.updatedAt),
            publishedAt: new Date(rawWork.client.publishedAt),
            revisedAt: new Date(rawWork.client.revisedAt),
            }
        : null,
    skills: rawWork.skills.map((rawSkill: RawSkill) => ({
        ...rawSkill,
        createdAt: new Date(rawSkill.createdAt),
        updatedAt: new Date(rawSkill.updatedAt),
        publishedAt: new Date(rawSkill.publishedAt),
        revisedAt: new Date(rawSkill.revisedAt),
    }))
}));

export default WorkData;

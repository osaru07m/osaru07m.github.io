import { Work } from "@/types";
import { works } from "@/works";

export function getWorks(limit?: number): Work[] {
    works.sort((a, b) => {
        return new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime();
    })

    if (limit) {
        return works.slice(0, limit);
    }

    return works;
}

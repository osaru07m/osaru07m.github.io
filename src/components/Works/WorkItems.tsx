import { getWorks } from "@/lib/works"
import { sleep } from "@/utils/helpers";
import Link from "next/link";
import styles from "./WorkItems.module.css"
import WorkItem from "./WorkItem";

export type Props = {
    limit: number
}

export default function WorkItems({ limit }: Props) {
    sleep(2500);
    const works = getWorks(limit);

    return (
        <div className={styles.items}>
            {works.map((work) => (
                <WorkItem key={`${work.title}-${work.date}`} work={work} />
            ))}
        </div>
    )
}

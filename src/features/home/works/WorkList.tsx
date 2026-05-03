import works from "@/data/works.json";
import styles from "@/features/home/works/works.module.scss";
import { Work } from "@/types";
import WorkListItem from "@/features/home/works/WorkListItem";

export default async function WorkList() {
    return (
        <div className={styles.works}>
            {works.slice(0, 6).map((work: Work) => (
                <WorkListItem key={work.id} work={work}/>
            ))}
        </div>
    );
}

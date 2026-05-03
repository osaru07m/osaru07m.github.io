import works from "@/data/works.json";
import styles from "@/features/works/works.module.scss";
import { Work } from "@/types";
import WorkListItem from "@/features/works/WorkListItem";

export default async function WorkList() {
    return (
        <div className={styles.works}>
            {works.map((work: Work) => (
                <WorkListItem key={work.id} work={work}/>
            ))}
        </div>
    );
}

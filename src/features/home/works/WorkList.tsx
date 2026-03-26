import { client } from "@/libs/microcms/client";
import styles from "@/features/home/works/works.module.scss";
import { Work } from "@/types";
import WorkListItem from "./WorkListItem";

export default async function WorkList() {
    const works = await client.get({
        queries: {
            'orders': '-start_at',
            limit: 6,
        },
        endpoint: 'works'
    });

    return (
        <div className={styles.works}>
            {works.contents.map((work: Work) => (
                <WorkListItem key={work.id} work={work}/>
            ))}
        </div>
    );
}

import { client } from "@/libs/microcms/client";
import styles from "@/features/works/works.module.scss";
import { Work } from "@/types";
import WorkListItem from "@/features/works/WorkListItem";

export default async function WorkList() {
    const works = await client.get({
        queries: {
            'orders': '-start_at',
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

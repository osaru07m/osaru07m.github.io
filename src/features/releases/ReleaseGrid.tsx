import { client } from "@/libs/microcms/client";
import { Release } from "@/types";
import ReleaseCard from "@/features/home/releases/ReleaseCard";
import styles from "@/features/home/releases/releases.module.scss";

export default async function ReleaseGrid() {
    const releases = await client.get({
        queries: {
            'orders': '-start_at',
        },
        endpoint: 'releases'
    });

    return (
        <div className={styles.releases}>
            {releases.contents.map((release: Release) => (
                <ReleaseCard key={release.id} release={release} />
            ))}
        </div>
    );
}

import releases from "@/data/releases.json";
import { Release } from "@/types";
import ReleaseCard from "@/features/home/releases/ReleaseCard";
import styles from "@/features/home/releases/releases.module.scss";

export default async function ReleaseGrid() {
    return (
        <div className={styles.releases}>
            {releases.map((release: Release) => (
                <ReleaseCard key={release.id} release={release} />
            ))}
        </div>
    );
}

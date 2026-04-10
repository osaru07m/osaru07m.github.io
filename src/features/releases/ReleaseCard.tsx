import { Release } from "@/types";
import styles from "@/features/home/releases/releases.module.scss";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";

export type Props = {
    release: Release
}

export default function ArticleCard({ release }: Props) {
    return (
        <div className={styles.release__card}>
            {
                release.image &&
                <div className={styles.release__card__header}>
                    <Image
                        src={release.image.url}
                        alt={release.image.alt ?? ''}
                        fill
                    />
                </div>
            }

            <h4 className={styles.release__card__title}>{release.title}</h4>

            {release.comment && <p>{release.comment}</p>}

            <div className={styles.release__card__footer}>
                {release.url && <Button href={release.url} size="sm">Open</Button>}
                {release.document_url && <Button href={release.document_url} size="sm">Document</Button>}
            </div>
        </div>
    )
}

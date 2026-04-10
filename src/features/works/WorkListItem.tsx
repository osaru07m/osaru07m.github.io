import { Work } from "@/types";
import styles from "@/features/works/works.module.scss";
import Link from "next/link";
import Image from "next/image";

export type Props = {
    work: Work
};

export default function WorkListItem({ work }: Props) {
    return (
        <div key={work.id} className={`${styles.works__item} ${work.product_image ? styles.works__item__has_image : ''}`}>
            <div className={styles.works__item__content}>
                <h4>{work.title}</h4>
                <p>{work.description}</p>

                {work.client_name && (
                    <div className={styles.works__item__client}>
                        <span>Client:</span>
                        {work.client_url ? (
                            <Link href={work.client_url} target="_blank">
                                {work.client_name}
                            </Link>
                        ) : (
                            <span>{work.client_name}</span>
                        )}
                    </div>
                )}

                <div className={styles.works__item__tags}>
                    {work.skills && work.skills.map((skill, i) => (
                        <span key={i}>{skill}</span>
                    ))}
                </div>
            </div>

            {work.product_image && (
                <div className={styles.works__item__product_image}>
                    <Image
                        src={work.product_image.url}
                        alt={work.product_image.alt ?? ''}
                        fill
                    />
                </div>
            )}
        </div>
    );
}

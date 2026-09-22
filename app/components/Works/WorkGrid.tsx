import { Work } from "@/feature/works/types/work";
import styles from "./Works.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
    items: Work[]
}

export default function WorkGrid({items}: Props) {
    return (
        <ul className={styles.workGrid}>
            {items.map((item: Work) => (
                <li key={item.id}>
                    <Link
                        href={`/works/${item.id}/`}
                        className={styles.workGrid__item}
                    >
                        <div className={styles.workGrid__item__header}>
                            <h3 className={styles.workGrid__item__title}>{item.title}</h3>

                            {item.client ? (
                                <span className={styles.workGrid__item__client}>{item.client.name}{item.client.isHonorificEnabled ? " 様" : ""}</span>
                            ) : (
                                <span className={styles.workGrid__item__client}></span>
                            )}
                        </div>

                        {item.mainVisual ? (
                            <Image
                                src={item.mainVisual.url}
                                alt={item.mainVisual.alt ?? item.title}
                                width={item.mainVisual.width}
                                height={item.mainVisual.height}
                                loading="lazy"
                            />
                        ) : (
                            <Image
                                src="/no-image.png"
                                alt="画像なし"
                                width={1920}
                                height={1080}
                            />
                        )}

                        <p className={styles.workGrid__item__intro}>{item.intro}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

import { Work } from "@/feature/works/types/work"
import styles from "./Works.module.scss";
import Link from "next/link";
import Image from "next/image";

type Props = {
    items: Work[]
}

export default function WorkList({ items }: Props) {
    return (
        <ul className={styles.workList}>
            {items.map((item: Work) => (
                <li key={item.id}>
                    <Link
                        href={`/works/${item.id}/`}
                        className={styles.workList__item}
                    >
                        {item.mainVisual ? (
                            <Image
                                src={item.mainVisual.url}
                                alt={item.mainVisual.alt ?? item.title}
                                width={item.mainVisual.width}
                                height={item.mainVisual.height}
                                loading="lazy"
                            />
                        ): (
                            <Image
                                src="/no-image.png"
                                alt="画像なし"
                                width={1920}
                                height={1080}
                            />
                        )}

                        <div>
                            <div className={styles.workList__item__header}>
                                <h3 className={styles.workList__item__title}>{item.title}</h3>

                                {item.client && (
                                    <span className={styles.workList__item__client}>{item.client.name}{item.client.isHonorificEnabled ? " 様" : ""}</span>
                                )}
                            </div>

                            <p className={styles.workList__item__intro}>{item.intro}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

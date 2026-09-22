import { News } from "@/feature/news/types/news";
import Link from "next/link";
import styles from "./News.module.scss";
import { formatDate } from "@/utils/helpers";

type Props = {
    items: News[]
}

export default function NewsList({items}: Props) {
    return (
        <ul className={styles.newsList}>
            {items.map((item: News) => (
                <li key={item.id}>
                    <Link href={`/news/${item.id}/`} className={styles.newsList__item}>
                        <span className={styles.newsList__item__date}>{formatDate(item.publishedAt)}</span>
                        <h3 className={styles.newsList__item__title}>{item.title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

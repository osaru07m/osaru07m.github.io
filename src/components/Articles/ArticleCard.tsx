import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils/helpers";
import { Article } from "@/types";

import styles from "./Articles.module.css";

export default function ArticleCard({ article }: { article: Article }) {
    return (
        <article className={styles.card}>
            <Link
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                <div className={styles.header}>
                    <Image
                        src={`https://www.google.com/s2/favicons?sz=64&domain=${new URL(article.link).hostname}`}
                        alt={article.source}
                        width={16}
                        height={16}
                    />
                    <span>{article.source}</span>
                </div>

                <h3 className={styles.title}>{article.title}</h3>

                {article.pubDate && (
                    <time dateTime={formatDate(article.pubDate)} className={styles.pubDate}>{formatDate(article.pubDate)}</time>
                )}
            </Link>
        </article>
    );
}

import { Article } from "@/types"
import styles from "@/features/home/articles/articles.module.scss";
import Image from "next/image";
import { formatDate } from "@/utils/helpers";
import Link from "next/link";
import ExternalLinkIcon from "@/components/ui/Icon/ExternalLinkIcon";

export type Props = {
    article: Article
}

export default function ArticleCard({ article }: Props) {
    return (
        <article>
            <Link
                href={article.link}
                className={styles.article__card}
            >
                <div className={styles.article__card__header}>
                    <div>
                        <Image
                            src={article.favicon}
                            alt={article.source}
                            width={24}
                            height={24}
                        />
                        <span>{article.source}</span>
                    </div>
                    <ExternalLinkIcon className={styles.article__card__externalLinkIcon} />
                </div>
                <h4 className={styles.article__card__title}>{article.title}</h4>
                <div className={styles.article__card__footer}>
                    <time dateTime={formatDate(article.pubDate, "yyyy-mm-dd")}>{formatDate(article.pubDate, "yyyy-mm-dd")}</time>
                </div>
            </Link>
        </article>
    )
}

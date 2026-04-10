import { getArticles } from "@/libs/rss-feeds";
import { Article } from "@/types";
import ArticleCard from "./ArticleCard";
import styles from "@/features/home/articles/articles.module.scss";

export default async function ArticleGrid() {
    const articles = await getArticles();

    return (
        <div className={styles.articles}>
            {articles.map((article: Article) => (
                <ArticleCard key={article.link} article={article} />
            ))}
        </div>
    );
}

import { getArticles } from '@/lib/rss'
import styles from './Articles.module.css'
import ArticleCard from './ArticleCard'
import Link from 'next/link'

export const runtime = 'nodejs'
export const revalidate = 3600

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function ArticleCards({ limit }: { limit: number }) {
    await sleep(2500);
    const articles = await getArticles(limit)
    const articlesCount = (await getArticles()).length;

    return (
        <div className={styles.cards}>
            {articles.map((article, i) => (
                <ArticleCard key={i} article={article} />
            ))}

            {
                articlesCount > limit &&
                <Link href="/articles" className={styles.btn_seeMore}>See more →</Link>
            }
        </div>
    )
}

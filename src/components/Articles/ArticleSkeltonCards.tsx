import styles from "./Articles.module.css";
import ArticleSkeltonCard from "./ArticleSkeltonCard";

export default function ArticleSkeltonCards({ limit = 6 }: { limit?: number }) {
  return (
    <div className={styles.cards}>
      {Array.from({ length: limit }).map((_, i) => (
        <ArticleSkeltonCard key={i} />
      ))}
    </div>
  )
}

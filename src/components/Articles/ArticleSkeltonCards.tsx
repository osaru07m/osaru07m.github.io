import styles from "./Articles.module.css";
import ArticleSkeltonCard from "./ArticleSkeltonCard";

export type Props = {
  limit?: number
}

export default function ArticleSkeltonCards({ limit = 6 }: Props) {
  return (
    <div className={styles.cards}>
      {Array.from({ length: limit }).map((_, i) => (
        <ArticleSkeltonCard key={i} />
      ))}
    </div>
  )
}

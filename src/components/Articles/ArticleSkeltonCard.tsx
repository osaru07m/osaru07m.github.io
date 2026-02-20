import styles from "./Articles.module.css";

export default function ArticleSkeltonCard() {
  return (
    <article className={styles.card}>
      <div className={`${styles.link} ${styles.skeleton}`}>
        <div className={styles.header}>
            <div className={styles.skeletonHeader} />
        </div>

        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonDate} />
      </div>
    </article>
  );
}

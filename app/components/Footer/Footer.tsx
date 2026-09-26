import Config from "@/config";
import styles from "./Footer.module.scss";

export default function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <a href="/terms-and-privacy/" className={styles.footer__links__item}>利用規約とプライバシー</a>

            </div>
            <p className={styles.footer__copy}>&copy; {(new Date()).getFullYear()} {Config.site.title}.</p>
        </footer>
    )
}

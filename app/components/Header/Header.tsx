import Config from "@/config";
import styles from "./Header.module.scss";
import Menu from "./Menu/Menu";
import Link from "next/link";

export default function HeaderComponent() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.header__brand}>{Config.site.title}</Link>

            <Menu />
        </header>
    );
}

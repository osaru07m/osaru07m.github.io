import { Config } from "@/config";
import Image from "next/image";
import styles from "@/components/layouts/SiteHeader.module.scss";
import Link from "next/link";

export default function SiteHeader() {
    return (
        <header>
            <Link href="/" className={styles.header__brand}>
                <Image
                    src="/icon.png"
                    alt={Config.siteMeta.title}
                    fill
                    className={styles.header__logo}
                />
                <span className={styles.header__title}>Osaru</span>
            </Link>
        </header>
    );
}

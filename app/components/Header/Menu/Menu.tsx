'use client';

import { useState } from "react";
import styles from "../Header.module.scss";
import { MenuBarsIcon } from "../MenuBarsIcon";
import Link from "next/link";
import Config from "@/config";
import Image from "next/image";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.header__menu}>
            <nav className={`${styles.header__menuBody} ${isOpen ? styles.header__menuBody_isOpened : ""}`}>
                <ul className={styles.header__menuItems}>
                    <li className={styles.header__menuHeader}>メニュー</li>
                    <li><Link href="/" onClick={() => setIsOpen(false)}>ホーム</Link></li>
                    <li><Link href="/news/" onClick={() => setIsOpen(false)}>おしらせ</Link></li>
                    <li><Link href="/works/" onClick={() => setIsOpen(false)}>制作実績</Link></li>
                </ul>

                <ul className={styles.header__menuLinks}>
                    {Object.entries(Config.links).map(([key, url], index) => (
                        <li key={index}>
                            <Link
                                href={url}
                                target="_blank"
                                className={styles.header__menuLinks__item}
                            >
                                <Image
                                    src={`/${key}.svg`}
                                    alt={key}
                                    width={64}
                                    height={64}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <button
                className={`${styles.header__menuButton} ${isOpen ? styles.header__menuButton_isOpened : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <MenuBarsIcon className={styles.header__menuButton__Icon} />
            </button>
        </div>
    );
}

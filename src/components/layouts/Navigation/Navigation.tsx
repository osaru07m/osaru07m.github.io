'use client'

import { useState } from "react";
import styles from "@/components/layouts/Navigation/Navigation.module.scss";
import { Config } from "@/config";
import Image from "next/image";
import BarsIcon from "@/components/ui/Icon/BarsIcon";
import XMarkIcon from "@/components/ui/Icon/XMarkIcon";
import Link from "next/link";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.navigation}>
            <nav className={`${styles.navigation__body} ${isOpen ? styles.is_open : ''}`}>
                <div className={styles.navigation__header}>
                    <Image
                        src="/icon.png"
                        alt={Config.siteMeta.title}
                        width={32}
                        height={32}
                    />
                    <span>{Config.siteMeta.title}</span>
                </div>
                <ul className={styles.navigation__items}>
                    <li><Link href="/">ホーム</Link></li>
                    <li><Link href="/works">実績</Link></li>
                    <li><Link href="/releases">成果物</Link></li>
                    <li><Link href="/articles">記事</Link></li>
                </ul>
            </nav>

            <button className={`${styles.navigation__toggleBtn} ${isOpen ? styles.is_open : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <div className={styles.navigation__toggleBtn__icons}>
                    <BarsIcon className={styles.navigation__toggleBtn__icon_bars} />
                    <XMarkIcon className={styles.navigation__toggleBtn__icon_x} />
                </div>
                Menu
            </button>
        </div>
    );
}

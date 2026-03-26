'use client'

import { useState } from "react";
import styles from "@/components/layouts/Navigation/Navigation.module.scss";
import { Config } from "@/config";
import Image from "next/image";
import BarsIcon from "@/components/ui/Icon/BarsIcon";
import XMarkIcon from "@/components/ui/Icon/XMarkIcon";

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
                    <li><a href="/">Home</a></li>
                    <li><a>Works (Coming soon)</a></li>
                    <li><a>Articles (Coming soon)</a></li>
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

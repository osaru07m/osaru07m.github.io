"use client";

import { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import Image from "next/image";
import { SiteConfig } from "@/site.config";
import Link from "next/link";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <div className={styles.menuWrapper}>
            <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
                <div className={styles.menuHeader}>
                    <Image
                        src="/icon.png"
                        alt={SiteConfig.siteMeta.title}
                        width={48}
                        height={48}
                        className={styles.menuHeader__icon}
                    />
                    <span className={styles.menuHeader__title}>{ SiteConfig.siteMeta.title }</span>
                </div>

                <ul className={styles.items}>
                    <li><Link href="/works">Works</Link></li>
                    <li><Link href="/articles">Articles</Link></li>
                </ul>
            </div>

            <button
                onClick={toggleMenu}
                className={styles.btn}
                aria-expanded={isOpen}
            >{ isOpen ? "Close" : "Menu" }</button>
        </div>
    );
}

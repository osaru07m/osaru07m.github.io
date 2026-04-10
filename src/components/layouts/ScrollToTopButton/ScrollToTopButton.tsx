'use client';

import { useEffect, useState } from "react";
import styles from "@/components/layouts/ScrollToTopButton/ScrollToTopButton.module.scss";
import AngleTopIcon from "@/components/ui/Icon/AngleTopIcon";

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button onClick={scrollToTop} aria-label="Scroll to top" className={`${styles.button} ${isVisible ? styles.isVisible : ''}`}>
            <span className="visually-hidden">Scroll to top</span>
            <AngleTopIcon className={styles.icon} />
        </button>
    );
}

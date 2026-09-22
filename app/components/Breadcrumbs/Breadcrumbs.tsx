import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";
import type BreadcrumbItem from "./types";

type Props = {
    items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: Props) {
    return (
        <ul className={styles.breadcrumbs}>
            {items.map((item, index) => (
                <li key={index} className={styles.breadcrumbs__item}>
                    {item.url ? (
                        <Link href={item.url} className={styles.breadcrumbs__link}>{item.pageName}</Link>
                    ): (
                        <span className={styles.breadcrumbs__text}>{item.pageName}</span>
                    )}
                </li>
            ))}
        </ul>
    )
}

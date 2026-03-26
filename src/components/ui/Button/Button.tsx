import Link from "next/link";
import styles from "@/components/ui/Button/Button.module.scss";
import { ButtonIcon } from "./ButtonIcon";

type Props = {
    href?: string,
    children: string,
}

export default function Button({ href, children }: Props) {
    if (href) {
        return (
            <Link href={href} className={styles.btn}>
                <span className={styles.btn__text}>{children}</span>
                <ButtonIcon className={styles.btn__icon} />
            </Link>
        );
    }

    return (
        <button className={styles.btn}>{children}</button>
    );
}

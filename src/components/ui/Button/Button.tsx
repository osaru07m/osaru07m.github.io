import Link from "next/link";
import styles from "@/components/ui/Button/Button.module.scss";
import { ButtonIcon } from "./ButtonIcon";

type Props = {
  href?: string,
  size?: 'sm' | 'lg',
  isBlank?: boolean,
  children: React.ReactNode,
};

export default function Button({ href, size, isBlank, children }: Props) {
  let className = '';

  switch (size) {
    case "sm":
      className = `${styles.btn} ${styles.btn_sm}`
      break;
    case "lg":
      className = `${styles.btn} ${styles.btn_lg}`
      break;
    default:
      className = styles.btn
      break;
  }

  console.log(className);

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        target={isBlank ? "_blank" : undefined}
        rel={isBlank ? "noopener noreferrer" : undefined}
      >
        <span className={styles.btn__text}>{children}</span>
        <ButtonIcon className={styles.btn__icon} />
      </Link>
    );
  }

  return (
    <button className={className}>
      <span className={styles.btn__text}>{children}</span>
      <ButtonIcon className={styles.btn__icon} />
    </button>
  );
}

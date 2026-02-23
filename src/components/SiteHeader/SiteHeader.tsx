import Link from "next/link"
import Image from "next/image"

import styles from "./SiteHeader.module.css"

export default function SiteHeader() {
    return (
        <header className={styles.siteHeader}>
            <nav className={styles.siteHeaderInner}>
                <Link href="/" className={styles.siteHeaderBrand}>Osaru</Link>

                <ul className={styles.siteHeaderLinks}>
                    <li>
                        <Link href="https://github.com/osaru07m/" target="_blank">
                            <Image
                                src="/github.svg"
                                alt="GitHub"
                                width={24}
                                height={24}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://x.com/osaru07m/" target="_blank">
                            <Image
                                src="/x-twitter.svg"
                                alt="X"
                                width={24}
                                height={24}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://zenn.dev/osaru07m/" target="_blank">
                            <Image
                                src="/zenn.svg"
                                alt="Zenn"
                                width={24}
                                height={24}
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

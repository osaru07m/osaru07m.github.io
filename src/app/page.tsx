import { Suspense } from "react";
import FeedCards from "@/components/Articles/ArticleCards";
import styles from "./page.module.css";
import FeedCardSkeletons from "@/components/Articles/ArticleSkeltonCards";
import Image from "next/image";
import { SiteConfig } from "@/site.config";
import WorksList from "@/components/Works/WorksList";

export default function Home() {
    const feedsLimit = 6;

    return (
        <main className={styles.main}>
            <section id={styles.keyVisual}>
                <Image
                    src="/avatar.png"
                    alt="Osaru's avatar"
                    width={160}
                    height={100}
                    className={styles.keyVisual_avatar}
                />
                <h1 className={styles.keyVisual_title}>{SiteConfig.siteMeta.title}</h1>
                <p className={styles.keyVisual_introduce}>I'm Osaru, an engineer based in Japan.<br />I develop web applications independently.<br />Currently, I'm building a task and project management system.</p>
            </section>

            <section>
                <h2>Works</h2>
                <WorksList limit={6} />
            </section>

            <section>
                <h2>Articles</h2>
                <Suspense
                    fallback={
                        <FeedCardSkeletons limit={feedsLimit}/>
                    }
                >
                    <FeedCards limit={feedsLimit} />
                </Suspense>
            </section>
        </main>
    );
}

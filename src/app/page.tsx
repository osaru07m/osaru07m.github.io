import { Suspense } from "react";
import FeedCards from "@/components/Articles/ArticleCards";
import styles from "./page.module.css";
import FeedCardSkeletons from "@/components/Articles/ArticleSkeltonCards";
import Image from "next/image";
import { SiteConfig } from "@/site.config";
import WorkItems from "@/components/Works/WorkItems";

export default function Home() {
    const worksLimit = 6;
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
                <div className={styles.keyVisual_introduce}>
                    <p>I'm Osaru, an engineer based in Japan.</p>
                    <p>I develop web applications independently.</p>
                    <p>Currently, I'm building a task and project management system.</p>
                </div>
            </section>

            <section>
                <h2>Recent Works</h2>
                <WorkItems limit={worksLimit} />
            </section>

            <section>
                <h2>Recent Articles</h2>
                <Suspense
                    fallback={
                        <FeedCardSkeletons limit={feedsLimit} />
                    }
                >
                    <FeedCards limit={feedsLimit} />
                </Suspense>
            </section>
        </main>
    );
}

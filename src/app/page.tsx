import { Config } from "@/config";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import { cascadiaMono, spaceMono } from "@/fonts";
import { WorkList } from "@/features/home";
import Button from "@/components/ui/Button/Button";
import ArticleGrid from "@/features/home/articles/ArticleGrid";
import { Suspense } from "react";

export default async function Home() {

    return (
        <>
            <div id="keyVisual" className={styles.keyVisual}>
                <Image
                    src="/avatar.png"
                    alt="Osaru avatar"
                    fill
                    className={styles.keyVisual__avatar}
                />
                <h1 className={[styles.keyVisual__title, cascadiaMono.className].join(" ")}>{Config.siteMeta.title}</h1>
                <div className={styles.keyVisual__introduce}>
                    <p>I'm Osaru, an engineer based in Japan.</p>
                    <p>I develop web applications independently.</p>
                    <p>Currently, I'm building a task and project management system.</p>
                </div>
            </div>

            <main>
                <h2 className="visually-hidden">Home</h2>

                <section id="works">
                    <h3 className={spaceMono.className}>Works</h3>

                    <Suspense fallback="loading...">
                        <WorkList />

                        <div className={styles.works__footer}>
                            <Button href="/works">See more...</Button>
                        </div>
                    </Suspense>
                </section>

                <section id="articles">
                    <h3 className={spaceMono.className}>Articles</h3>

                    <Suspense fallback="loading...">
                        <ArticleGrid />

                        <div className={styles.articles__footer}>
                            <Button href="/articles">See more...</Button>
                        </div>
                    </Suspense>
                </section>
            </main>
        </>
    );
}

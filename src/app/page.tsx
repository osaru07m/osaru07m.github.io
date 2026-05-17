import { Config } from "@/config";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import { cascadiaMono, spaceMono } from "@/fonts";
import { WorkList, ArticleGrid, ReleaseGrid } from "@/features/home";
import Button from "@/components/ui/Button/Button";
import { Suspense } from "react";
import { Loading } from "@/components/ui/Loading/Loading";

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
                    <p>日本在住のエンジニア、おさるです。</p>
                    <p>主にWebアプリケーションを開発しています。</p>
                    <p>現在、OSSのタスクおよびプロジェクト管理システムを制作しています。</p>
                </div>
            </div>

            <main>
                <h2 className="visually-hidden">ホーム</h2>

                <section id="works">
                    <h3 className={spaceMono.className}>実績</h3>

                    <Suspense fallback={<Loading />}>
                        <WorkList />

                        <div className={styles.works__footer}>
                            <Button href="/works">もっと見る</Button>
                        </div>
                    </Suspense>
                </section>

                <section id="releases">
                    <h3 className={spaceMono.className}>成果物</h3>

                    <Suspense fallback={<Loading />}>
                        <ReleaseGrid />

                        <div className={styles.releases__footer}>
                            <Button href="/releases">もっと見る</Button>
                        </div>
                    </Suspense>
                </section>

                <section id="articles">
                    <h3 className={spaceMono.className}>記事</h3>

                    <Suspense fallback={<Loading />}>
                        <ArticleGrid />

                        <div className={styles.articles__footer}>
                            <Button href="/articles">もっと見る</Button>
                        </div>
                    </Suspense>
                </section>
            </main>
        </>
    );
}

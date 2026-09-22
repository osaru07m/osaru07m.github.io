import NewsData from "@/feature/news/data";
import WorkData from "@/feature/works/data";
import styles from "./page.module.scss";
import Image from "next/image";
import NewsList from "./components/News/NewsList";
import Link from "next/link";
import WorkGrid from "./components/Works/WorkGrid";
import Config from "@/config";

export default function Home() {
    return (
        <main className={styles.home_main}>
            <section id="hero" className={styles.hero}>
                <div className={styles.hero__profile}>
                    <span className={styles.hero__profile__title}>Web Engineer</span>
                    <h2 className={styles.hero__profile__name}>Osaru</h2>
                </div>
                <figure className={styles.hero__avatar}>
                    <Image
                        src="/avatar_1.png"
                        alt="おさる"
                        width={1024}
                        height={1536}
                    />
                </figure>
            </section>

            <section id="news" className={styles.news}>
                <div className="container">
                    <h2>お知らせ</h2>

                    <NewsList items={NewsData.slice(0, 6)} />

                    {NewsData.length > 6 && (
                        <div className={styles.btn_container}>
                            <Link href="/news/" className="btn-primary_outline">もっとみる</Link>
                        </div>
                    )}
                </div>
            </section>

            <section id="works" className={styles.works}>
                <div className="container">
                    <h2>制作実績</h2>

                    <WorkGrid items={WorkData.slice(0, 6)} />

                    {WorkData.length > 6 && (
                        <div className={styles.btn_container}>
                            <Link href="/works/" className="btn-primary_outline">もっとみる</Link>
                        </div>
                    )}
                </div>
            </section>

            <section id="posts" className={styles.posts}>
                <div className="container">
                    <h2>Zenn</h2>

                    <p>Web制作や公開環境のセットアップだけでなく、<Link href={Config.links.zenn} target="_blank">Zenn</Link>でテックノウハウを公開しています。<br />ぜひご覧ください。</p>

                    <Link href={Config.links.zenn} target="_blank">
                        <Image
                            src="/zenn_profile.png"
                            width={1266}
                            height={353}
                            alt="おさるのZennプロフィール"
                        />
                    </Link>

                    <span className={styles.posts__help_text}>画像をクリックするとサイトへ遷移します。</span>
                </div>
            </section>
        </main>
    );
}

import NewsData from "@/feature/news/data";
import { News } from "@/feature/news/types/news";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";
import { formatDate } from "@/utils/helpers";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import BreadcrumbItem from "@/app/components/Breadcrumbs/types";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { newsJsonLd } from "@/libs/json-ld/news";
import { breadcrumbsJsonLd } from "@/libs/json-ld/breadcrumbs";

export async function generateStaticParams() {
    return NewsData.map((newsItem: News) => ({
        id: newsItem.id,
    }));
}

type Props = {
    params: Promise<{ id: string }>;
};

export default async function NewsDetailPage({ params }: Props) {
    const { id } = await params;

    const item = NewsData.find((newsItem: News) => newsItem.id === id);

    if (!item) return notFound();

    const breadcrumbs: BreadcrumbItem[] = [
        {
            pageName: "ホーム",
            url: "/"
        },
        {
            pageName: "お知らせ",
            url: "/news/"
        },
        {
            pageName: item.title
        }
    ];

    return (
        <>
            <JsonLd data={breadcrumbsJsonLd(breadcrumbs)} />
            <JsonLd data={newsJsonLd(item)} />

            <main>
                <Breadcrumbs items={breadcrumbs} />

                <article className={styles.news}>
                    <div className="container">
                        <h2 className={styles.news__title}>{item.title}</h2>
                        <div className={styles.news__meta}>
                            <span className={styles.news__meta__category}>{item.category.name}</span>
                            <span className={styles.news__meta__publishedAt}>{formatDate(item.publishedAt)}</span>
                        </div>
                        <div
                            className={styles.news__content}
                            dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                    </div>

                    <div className={styles.news__btn_container}>
                        <Link href="/news/" className="btn-primary">一覧にもどる</Link>
                    </div>
                </article>
            </main>
        </>
    );
}

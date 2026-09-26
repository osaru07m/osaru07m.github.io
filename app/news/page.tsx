import NewsData from "@/feature/news/data";
import NewsList from "../components/News/NewsList";
import BreadcrumbItem from "../components/Breadcrumbs/types";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { newsListJsonLd } from "@/libs/json-ld/news";
import { breadcrumbsJsonLd } from "@/libs/json-ld/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "お知らせ"
}

export default function NewsIndex() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            pageName: "ホーム",
            url: "/"
        },
        {
            pageName: "お知らせ",
        }
    ];

    return (
        <>
            <JsonLd data={breadcrumbsJsonLd(breadcrumbs)} />
            <JsonLd data={newsListJsonLd(NewsData)} />

            <main>
                <Breadcrumbs items={breadcrumbs} />

                <section id="news">
                    <div className="container">
                        <h2>お知らせ</h2>

                        <NewsList items={NewsData} />
                    </div>
                </section>
            </main>
        </>
    );
}

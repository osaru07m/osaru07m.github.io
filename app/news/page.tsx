import NewsData from "@/feature/news/data";
import NewsList from "../components/News/NewsList";
import BreadcrumbItem from "../components/Breadcrumbs/types";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

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
        <main>
            <Breadcrumbs items={breadcrumbs} />

            <section id="news">
                <div className="container">
                    <h2>お知らせ</h2>

                    <NewsList items={NewsData} />
                </div>
            </section>
        </main>
    );
}

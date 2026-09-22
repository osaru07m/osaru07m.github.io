import WorkData from "@/feature/works/data";
import WorkList from "../components/Works/WorkList";
import BreadcrumbItem from "../components/Breadcrumbs/types";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export default function NewsIndex() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            pageName: "ホーム",
            url: "/"
        },
        {
            pageName: "制作実績",
        }
    ];

    return (
        <main>
            <Breadcrumbs items={breadcrumbs} />

            <section id="news">
                <div className="container">
                    <h2>制作実績</h2>

                    <WorkList items={WorkData} />
                </div>
            </section>
        </main>
    );
}

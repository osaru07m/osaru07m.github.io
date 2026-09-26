import WorkData from "@/feature/works/data";
import WorkList from "../components/Works/WorkList";
import BreadcrumbItem from "../components/Breadcrumbs/types";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { worksListJsonLd } from "@/libs/json-ld/work";
import { breadcrumbsJsonLd } from "@/libs/json-ld/breadcrumbs";

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
        <>
            <JsonLd data={breadcrumbsJsonLd(breadcrumbs)} />
            <JsonLd data={worksListJsonLd(WorkData)} />

            <main>
                <Breadcrumbs items={breadcrumbs} />

                <section id="news">
                    <div className="container">
                        <h2>制作実績</h2>

                        <WorkList items={WorkData} />
                    </div>
                </section>
            </main>
        </>
    );
}

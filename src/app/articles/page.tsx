import { Config } from "@/config";
import { Suspense } from "react";
import { Loading } from "@/components/ui/Loading/Loading";
import { ArticleGrid } from "@/features/articles";

export default async function Articles() {
    return (
        <>
            <h1 className="visually-hidden">{Config.siteMeta.title}</h1>
            <main>
                <ul className="breadcrumbs">
                    <li><a href="/">Home</a></li>
                    <li><span className="active">Articles</span></li>
                </ul>

                <section>
                    <h2>Articles</h2>

                    <Suspense fallback={<Loading />}>
                        <ArticleGrid />
                    </Suspense>
                </section>
            </main>
        </>
    )
}

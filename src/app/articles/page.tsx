import { Config } from "@/config";
import { Suspense } from "react";
import { Loading } from "@/components/ui/Loading/Loading";
import { ArticleGrid } from "@/features/articles";
import Link from "next/link";

export default async function Articles() {
    return (
        <>
            <h1 className="visually-hidden">{Config.siteMeta.title}</h1>
            <main>
                <ul className="breadcrumbs">
                    <li><Link href="/">ホーム</Link></li>
                    <li><span className="active">記事</span></li>
                </ul>

                <section>
                    <h2>記事</h2>

                    <Suspense fallback={<Loading />}>
                        <ArticleGrid />
                    </Suspense>
                </section>
            </main>
        </>
    )
}

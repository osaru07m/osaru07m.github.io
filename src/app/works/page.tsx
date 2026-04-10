import { Config } from "@/config";
import { Suspense } from "react";
import { WorkList } from "@/features/works";
import { Loading } from "@/components/ui/Loading/Loading";

export default async function Works() {
    return (
        <>
            <h1 className="visually-hidden">{Config.siteMeta.title}</h1>
            <main>
                <ul className="breadcrumbs">
                    <li><a href="/">Home</a></li>
                    <li><span className="active">Works</span></li>
                </ul>

                <section>
                    <h2>Works</h2>

                    <Suspense fallback={<Loading />}>
                        <WorkList />
                    </Suspense>
                </section>
            </main>
        </>
    )
}

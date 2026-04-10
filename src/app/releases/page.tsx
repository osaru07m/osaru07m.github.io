import { Config } from "@/config";
import { Suspense } from "react";
import { Loading } from "@/components/ui/Loading/Loading";
import { ReleaseGrid } from "@/features/releases";

export default async function Releases() {
    return (
        <>
            <h1 className="visually-hidden">{Config.siteMeta.title}</h1>
            <main>
                <ul className="breadcrumbs">
                    <li><a href="/">Home</a></li>
                    <li><span className="active">Releases</span></li>
                </ul>

                <section>
                    <h2>Releases</h2>

                    <Suspense fallback={<Loading />}>
                        <ReleaseGrid />
                    </Suspense>
                </section>
            </main>
        </>
    )
}

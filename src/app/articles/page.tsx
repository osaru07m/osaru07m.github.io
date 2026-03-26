import { Config } from "@/config";
import { Suspense } from "react";

export default async function Articles() {
    return (
        <>
            <h1 className="visually-hidden">{Config.siteMeta.title}</h1>

            <section>
                <h2>Articles</h2>

                <Suspense fallback="Loading...">

                </Suspense>
            </section>
        </>
    )
}

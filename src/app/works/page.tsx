import { Config } from "@/config";
import { Suspense } from "react";
import { WorkList } from "@/features/works";
import { Loading } from "@/components/ui/Loading/Loading";
import Link from "next/link";

export default async function Works() {
    return (
        <>
            <h1 className="visually-hidden">{Config.siteMeta.title}</h1>
            <main>
                <ul className="breadcrumbs">
                    <li><Link href="/">ホーム</Link></li>
                    <li><span className="active">実績</span></li>
                </ul>

                <section>
                    <h2>実績</h2>

                    <Suspense fallback={<Loading />}>
                        <WorkList />
                    </Suspense>
                </section>
            </main>
        </>
    )
}

import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import BreadcrumbItem from "@/app/components/Breadcrumbs/types";
import WorkData from "@/feature/works/data";
import type { Work } from "@/feature/works/types/work";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";
import Image from "next/image";
import type { Skill } from "@/feature/works/types/skill";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { workJsonLd } from "@/libs/json-ld/work";
import { breadcrumbsJsonLd } from "@/libs/json-ld/breadcrumbs";
import { Metadata } from "next";

export async function generateStaticParams() {
    return WorkData.map((workItem: Work) => ({
        id: workItem.id,
    }));
}

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;

    const item = WorkData.find((workItem: Work) => workItem.id === id);

    if (!item) {
        return {}
    }

    return {
        title: item.title
    }
}

export default async function NewsDetailPage({ params }: Props) {
    const { id } = await params;

    const item = WorkData.find((workItem: Work) => workItem.id === id);

    if (!item) return notFound();

    const breadcrumbs: BreadcrumbItem[] = [
        {
            pageName: "ホーム",
            url: "/"
        },
        {
            pageName: "制作実績",
            url: "/works/"
        },
        {
            pageName: item.title
        }
    ];

    return (
        <>
            <JsonLd data={breadcrumbsJsonLd(breadcrumbs)} />
            <JsonLd data={workJsonLd(item)} />

            <main>
                <Breadcrumbs items={breadcrumbs} />

                <article className={styles.work}>
                    <div className="container">
                        <div className={styles.work__header}>
                            <h2 className={styles.work__title}>{item.title}</h2>

                            {item.mainVisual ? (
                                <Image
                                    src={item.mainVisual.url}
                                    alt={item.mainVisual.alt ?? item.title}
                                    width={item.mainVisual.width}
                                    height={item.mainVisual.height}
                                    className={styles.work__main_visual}
                                />
                            ): (
                                <Image
                                    src="/no-image.png"
                                    alt="画像なし"
                                    width={1920}
                                    height={1080}
                                    className={styles.work__main_visual}
                                />
                            )}

                            <p className={styles.work__intro}>{item.intro}</p>
                        </div>

                        {item.client && (
                            <div className={styles.work__client}>
                                <h3>クライアント</h3>
                                {item.client.url ? (
                                    <p>
                                        <Link href={item.client.url} target="_blank">{item.client.name}{item.client.isHonorificEnabled ? " 様" : ""}</Link>
                                    </p>
                                ): (
                                    <p>{item.client.name}{item.client.isHonorificEnabled ? " 様" : ""}</p>
                                )}

                            </div>
                        )}

                        <div className={styles.work__description}>
                            <h3>詳細</h3>

                            <div
                                className={styles.work__description__content}
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                        </div>


                        <div className={styles.work__skills}>
                            <h3>スキル</h3>

                            <div className={styles.work__skills__box}>
                                {item.skills.map((skill: Skill) => (
                                    <span key={skill.id} className={styles.work__skills__tag}>{skill.value}</span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.work__btn_container}>
                            <Link href="/works/" className="btn-primary">一覧にもどる</Link>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

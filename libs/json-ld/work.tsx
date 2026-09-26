import { Work } from "@/feature/works/types/work";
import type { CollectionPage, CreativeWork, WithContext } from "schema-dts";

export function worksListJsonLd(works: Work[]): WithContext<CollectionPage> {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "制作実績",
        url: "https://osaru07m.github.io/works/",
        mainEntity: {
            "@type": "ItemList",
            numberOfItems: works.length,
            itemListElement: works.map((work, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@type": "CreativeWork",
                    name: work.title,
                    url: `https://osaru07m.github.io/works/${work.id}/`,
                },
            })),
        },
    };
}

export function workJsonLd(work: Work): WithContext<CreativeWork> {
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `https://osaru07m.github.io/works/${work.id}/#work`,
        name: work.title,
        description: work.intro,
        url: `https://osaru07m.github.io/works/${work.id}/`,
        creator: {
            "@id": "https://osaru07m.github.io/#person",
        }
    }
}

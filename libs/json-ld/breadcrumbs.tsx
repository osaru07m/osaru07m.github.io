import type BreadcrumbItem from "@/app/components/Breadcrumbs/types";
import { BreadcrumbList, WithContext } from "schema-dts";

export function breadcrumbsJsonLd(items: BreadcrumbItem[]): WithContext<BreadcrumbList> {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.pageName,
            ...(item.url && {
                item: item.url,
            }),
        })),
    };
}

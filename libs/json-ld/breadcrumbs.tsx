import type BreadcrumbItem from "@/app/components/Breadcrumbs/types";
import Config from "@/config";
import { BreadcrumbList, WithContext } from "schema-dts";

function toAbsoluteUrl(url: string): string | undefined {
    // BreadcrumbList の item には絶対URLが必要なため、相対パスはサイトURLを補って絶対URL化する
    // 絶対URLでも相対パスでもない値は無効として item を出力しない
    if (!url.startsWith("/") && !/^https?:\/\//.test(url)) {
        return undefined;
    }

    try {
        return new URL(url, Config.site.url).href;
    } catch {
        return undefined;
    }
}

export function breadcrumbsJsonLd(items: BreadcrumbItem[]): WithContext<BreadcrumbList> {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => {
            const absoluteUrl = item.url ? toAbsoluteUrl(item.url) : undefined;

            return {
                "@type": "ListItem",
                position: index + 1,
                name: item.pageName,
                ...(absoluteUrl && {
                    item: absoluteUrl,
                }),
            };
        }),
    };
}

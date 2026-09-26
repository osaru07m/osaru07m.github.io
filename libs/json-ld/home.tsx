import Config from "@/config";
import type { WebSite, WithContext } from "schema-dts";

export const homeJsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: Config.site.title,
    url: Config.site.url,
    description: Config.site.description,
};

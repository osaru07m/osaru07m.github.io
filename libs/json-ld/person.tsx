import Config from "@/config";
import { Person, WithContext } from "schema-dts";

export const personJsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://osaru07m.github.io/#person",
    "name": "おさる",
    "jobTitle": "Webエンジニア",
    "url": Config.site.url,
    "sameAs": [
        Config.links.github,
        Config.links.wantedly,
        Config.links.x_twitter,
        Config.links.zenn
    ],
    "knowsAbout": ["Web制作"]
}

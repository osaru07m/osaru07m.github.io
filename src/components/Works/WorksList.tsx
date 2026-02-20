import { getWorks } from "@/lib/works";
// {
//     title: string,
//     description: string,
//     clientName?: string,
//     clientUrl?: string,
//     skills: string[],
//     comment?: string,
//     url?: string,
//     thumbnail?: string,
//     date: string
// }

import Image from "next/image";
import Link from "next/link";
import WorksListItem from "./WorksListItem";

type Props = {
  limit: number;
};

export default function WorksList({limit}: Props) {
    const works = getWorks(limit);

    return (
        <ul>
            {works.map((work) => (
                <WorksListItem key={`${work.title}-${work.date}`} work={work} />
            ))}
        </ul>
    );
}

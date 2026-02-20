import { Work } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  work: Work;
};

export default function WorksListItem({ work }: Props) {
    const {
        title,
        description,
        clientName,
        clientUrl,
        skills,
        comment,
        url,
        thumbnail,
        date,
    } = work;

    return (
        <li>
            {thumbnail && (
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                />
                </div>
            )}

            <h3>{title}</h3>
            <p>{description}</p>

            {clientName && (
                clientUrl ? (
                <p>
                    Client:{" "}
                    <Link href={clientUrl} target="_blank" rel="noopener noreferrer">
                    {clientName}
                    </Link>
                </p>
                ) : (
                <p>Client: {clientName}</p>
                )
            )}

            {skills.length > 0 && (
                <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
                </ul>
            )}

            {comment && <p>{comment}</p>}

            {url && (
                <p>
                <Link href={url} target="_blank" rel="noopener noreferrer">
                    See work →
                </Link>
                </p>
            )}

            <time dateTime={date}>{date}</time>
        </li>
    );
}

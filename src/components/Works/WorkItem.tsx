import { Work } from "@/types"
import styles from "./WorkItems.module.css"
import Link from "next/link";
import Image from "next/image";

export type Props = {
    work: Work
}

export default function WorkItem({ work }: Props) {
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
        <div className={styles.item}>
            {thumbnail && (
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            )}

            <h3 className={styles.title}>{title}</h3>

            <p className={styles.description}>{description}</p>

            {clientName && (
                clientUrl ? (
                    <p className={styles.clientName}>
                        Client:{" "}
                        <Link href={clientUrl} target="_blank" rel="noopener noreferrer">
                            {clientName}
                        </Link>
                    </p>
                ) : (
                    <p className={styles.clientName}>Client: {clientName}</p>
                )
            )}

            {comment && <p className={`${"text-muted"} ${styles.comment}`}>{comment}</p>}

            <div className={styles.itemFooter}>
                <div>
                    {skills.length > 0 && (
                        <ul className={styles.skills}>
                            {skills.map((skill) => (
                                <li key={skill} className={styles.skill}>{skill}</li>
                            ))}
                        </ul>
                    )}
                </div>

                <time dateTime={date} className={styles.date}>{date}</time>
            </div>
        </div>
    );
}

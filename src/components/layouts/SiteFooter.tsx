import { Config } from "@/config";
import { formatDate } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
    const today = new Date();
    const profiles = Config.profiles;

    return (
        <footer>
            <small>&copy; {formatDate(today, "yyyy")} Osaru.</small>

            <div id="profiles">
                {Object.entries(profiles).map(([key, profile]) => (
                    <Link
                        key={key}
                        href={profile.url}
                        rel="external author"
                    >
                        <span className="visually-hidden">{profile.title} ({profile.username})</span>
                        <Image
                            src={`/${key}.svg`}
                            alt={profile.title}
                            width={24}
                            height={24}
                        />
                    </Link>
                ))}
            </div>
        </footer>
    );
}

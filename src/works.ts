import { Work } from "./types";

export const works: Work[] = [
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
    {
        title: "Shift Management Application Development",
        description: "Commissioned by an acquaintance's company, I developed this application. We actively incorporated feedback from employees and managers, resulting in high client satisfaction.",
        skills: ["PHP", "Laravel", "jQuery", "Ajax", "Bootstrap CSS", "SCSS", "MySQL"],
        comment: "This project's deliverable is not publicly disclosed due to client circumstances.",
        date: "2019-08-25"
    },
    {
        title: "Major Website Renovation",
        description: "Commissioned by an acquaintance's company, I undertook a major renovation. At the client's request, I redesigned the site to incorporate trendy UI designs and introduced features such as a news section.",
        skills: ["PHP", "jQuery", "Ajax", "SCSS", "CSS", "MySQL"],
        comment: "This project's deliverable is not publicly disclosed due to client circumstances.",
        date: "2021-01-14"
    },
    {
        title: "Web Server and Domain Setup",
        description: "For the launch of a new personal project site, I set up the web server and domain (currently closed). I also provided similar setup support for freelance clients.",
        skills: [],
        date: "2023-06-26"
    },
    {
        title: "Web Application Development for Event Management Team",
        description: "We operate an in-house event that combines study sessions and social gatherings. I developed a web application for the operating team to manage information related to this event.",
        clientName: "凪コミュ！",
        skills: ["PHP", "Laravel", "jQuery", "Bootstrap CSS", "MySQL"],
        date: "2025-12-03"
    },
    {
        title: "Internal Bulletin Board Web System Development",
        description: "I developed an internal bulletin board web system. I focused on UI/UX and was able to create a user-friendly system, drawing inspiration from recent social media platforms.",
        skills: ["PHP", "Laravel", "jQuery", "Ajax", "Bootstrap CSS", "MySQL"],
        date: "2025-09-01"
    }
];

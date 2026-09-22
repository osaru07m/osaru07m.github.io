export function formatDate(
    date: Date,
    format: string = "yyyy年m月d日"
): string {
    const map: Record<string, string> = {
        yyyy: String(date.getFullYear()),
        yy: String(date.getFullYear()).slice(-2),
        mm: String(date.getMonth() + 1).padStart(2, "0"),
        m: String(date.getMonth() + 1),
        dd: String(date.getDate()).padStart(2, "0"),
        d: String(date.getDate()),
        hh: String(date.getHours()).padStart(2, "0"),
        h: String(date.getHours()),
        ii: String(date.getMinutes()).padStart(2, "0"),
        ss: String(date.getSeconds()).padStart(2, "0"),
    };

    return format.replace(
        /yyyy|yy|mm|m|dd|d|hh|h|ii|ss/g,
        (key) => map[key]
    );
}

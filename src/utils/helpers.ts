export function string2date(dateString?: string): Date | undefined {
    if (!dateString) return undefined;

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return undefined;

    return date;
}

export function formatDate(date: Date | string | number | undefined, format: string = "yyyy-MM-dd"): string {
    if (!date) return "";

    const d = new Date(date);
    if (isNaN(d.getTime())) return "";

    const map: Record<string, string> = {
        yyyy: d.getFullYear().toString(),
        mm: String(d.getMonth() + 1).padStart(2, "0"),
        dd: String(d.getDate()).padStart(2, "0"),
        HH: String(d.getHours()).padStart(2, "0"),
        ii: String(d.getMinutes()).padStart(2, "0"),
        ss: String(d.getSeconds()).padStart(2, "0"),
    };

    return format.replace(/yyyy|mm|dd|HH|ii|ss/g, (key) => map[key]);
}

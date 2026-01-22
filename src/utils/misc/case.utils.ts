export const toLowerCase = (str: string): string => str?.toLowerCase?.();
export const toUpperCase = (str: string): string => str?.toUpperCase?.();
export const toCapitalize = (str: string): string =>
    str?.charAt?.(0)?.toUpperCase?.() + str?.slice?.(1);

export const toTitleCase = (str: string): string =>
    str?.replace?.(/\b\w/g, (char) => char?.toUpperCase?.());

export const getInitials = (name: string) => {
    if (!name) return "";
    const names = name.split(" ");
    return names
        .map((n) => n[0])
        .join("")
        .slice(0, 2);
};

export const getInitial= (name: string) => {
    const txt = name?.trim();
    let initials = txt?.charAt?.(0);
    return initials;
};
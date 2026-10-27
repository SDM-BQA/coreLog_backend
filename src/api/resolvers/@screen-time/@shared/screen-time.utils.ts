import sharp from "sharp";
import Tesseract from "tesseract.js";

type CategoryUsage = { name: string; minutes: number };
type AppUsage = { app_name: string; minutes: number };

const APP_SECTION_MARKERS = [
    "most used apps",
    "most used app",
    "used apps",
];

const NOISE_PATTERNS = [
    /^digital wellbeing$/i,
    /^most used apps?$/i,
    /^screen time$/i,
    /^total$/i,
    /^today$/i,
    /^\d+%$/,
];

const normalize_whitespace = (value: string) =>
    value
        .replace(/[|]/g, " ")
        .replace(/[•·]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

const normalize_name = (value: string) =>
    normalize_whitespace(value)
        .replace(/^[^a-z0-9]+/i, "")
        .replace(/[^a-z0-9&+.'/-]+$/i, "")
        .trim();

const decode_data_url = (image_base64: string) => {
    const clean = image_base64.includes(",") ? image_base64.split(",")[1] : image_base64;
    return Buffer.from(clean, "base64");
};

const preprocess_image = async (buffer: Buffer) => {
    const image = sharp(buffer, { failOn: "none" });
    const metadata = await image.metadata();
    const width = metadata.width ?? 720;
    const targetWidth = Math.max(1400, width);

    return image
        .rotate()
        .resize({ width: targetWidth, withoutEnlargement: false })
        .grayscale()
        .normalize()
        .sharpen()
        .png()
        .toBuffer();
};

const parse_duration_to_minutes = (value: string): number | null => {
    const text = normalize_whitespace(value.toLowerCase());
    const hm = text.match(/(\d{1,2})\s*h(?:\s*(\d{1,2})\s*m?)?/i);
    if (hm) {
        return Number(hm[1]) * 60 + Number(hm[2] ?? 0);
    }

    const mins = text.match(/(\d{1,3})\s*m\b/i);
    if (mins) {
        return Number(mins[1]);
    }

    return null;
};

const extract_duration_matches = (value: string) => {
    const matches: number[] = [];
    const regex = /(\d{1,2}\s*h(?:\s*\d{1,2}\s*m?)?|\d{1,3}\s*m\b)/gi;
    for (const match of value.matchAll(regex)) {
        const minutes = parse_duration_to_minutes(match[0]);
        if (minutes !== null) matches.push(minutes);
    }
    return matches;
};

const is_noise_line = (line: string) => {
    if (!line) return true;
    if (NOISE_PATTERNS.some((pattern) => pattern.test(line))) return true;
    if (/^[hm\d\s]+$/i.test(line)) return true;
    return false;
};

const push_unique_category = (target: CategoryUsage[], item: CategoryUsage) => {
    const key = item.name.toLowerCase();
    const existing = target.find((entry) => entry.name.toLowerCase() === key);
    if (!existing) {
        target.push(item);
        return;
    }
    if (item.minutes > existing.minutes) {
        existing.minutes = item.minutes;
        existing.name = item.name;
    }
};

const push_unique_app = (target: AppUsage[], item: AppUsage) => {
    const key = item.app_name.toLowerCase();
    const existing = target.find((entry) => entry.app_name.toLowerCase() === key);
    if (!existing) {
        target.push(item);
        return;
    }
    if (item.minutes > existing.minutes) {
        existing.minutes = item.minutes;
        existing.app_name = item.app_name;
    }
};

const parse_category_lines = (lines: string[]) => {
    const categories: CategoryUsage[] = [];

    for (let index = 0; index < lines.length; index += 1) {
        const line = lines[index];
        const inline = line.match(/^(.*?)\s+((?:\d{1,2}\s*h(?:\s*\d{1,2}\s*m?)?)|(?:\d{1,3}\s*m))$/i);
        if (inline) {
            const name = normalize_name(inline[1] ?? "");
            const minutes = parse_duration_to_minutes(inline[2] ?? "");
            if (name && minutes !== null && !is_noise_line(name)) {
                push_unique_category(categories, { name, minutes });
            }
            continue;
        }

        const next = lines[index + 1];
        const name = normalize_name(line);
        const minutes = next ? parse_duration_to_minutes(next) : null;
        if (name && minutes !== null && !is_noise_line(name)) {
            push_unique_category(categories, { name, minutes });
            index += 1;
        }
    }

    return categories
        .filter((item) => item.minutes > 0)
        .sort((a, b) => b.minutes - a.minutes)
        .slice(0, 6);
};

const parse_app_lines = (lines: string[]) => {
    const apps: AppUsage[] = [];

    for (let index = 0; index < lines.length; index += 1) {
        const line = lines[index];
        const inline = line.match(/^(.*?)\s+((?:\d{1,2}\s*h(?:\s*\d{1,2}\s*m?)?)|(?:\d{1,3}\s*m))$/i);
        if (inline) {
            const app_name = normalize_name(inline[1] ?? "");
            const minutes = parse_duration_to_minutes(inline[2] ?? "");
            if (app_name && minutes !== null && !is_noise_line(app_name)) {
                push_unique_app(apps, { app_name, minutes });
            }
            continue;
        }

        const next = lines[index + 1];
        const app_name = normalize_name(line);
        const minutes = next ? parse_duration_to_minutes(next) : null;
        if (app_name && minutes !== null && !is_noise_line(app_name)) {
            push_unique_app(apps, { app_name, minutes });
            index += 1;
        }
    }

    return apps
        .filter((item) => item.minutes > 0)
        .sort((a, b) => b.minutes - a.minutes)
        .slice(0, 3);
};

const extract_total_minutes = (lines: string[], text: string, apps: AppUsage[], categories: CategoryUsage[]) => {
    const firstChunk = lines.slice(0, 8).join(" ");
    const candidates = [
        ...extract_duration_matches(firstChunk),
        ...extract_duration_matches(text).slice(0, 3),
    ].sort((a, b) => b - a);

    if (candidates.length > 0) return candidates[0];

    const categoryTotal = categories.reduce((sum, item) => sum + item.minutes, 0);
    if (categoryTotal > 0) return categoryTotal;

    return apps.reduce((sum, item) => sum + item.minutes, 0);
};

export const parse_screen_time_text = (rawText: string) => {
    const lines = rawText
        .split(/\r?\n/)
        .map(normalize_whitespace)
        .filter(Boolean);

    const lowerLines = lines.map((line) => line.toLowerCase());
    const appMarkerIndex = lowerLines.findIndex((line) =>
        APP_SECTION_MARKERS.some((marker) => line.includes(marker))
    );

    const appLines = appMarkerIndex >= 0 ? lines.slice(appMarkerIndex + 1) : lines;
    const categoryLines = appMarkerIndex >= 0 ? lines.slice(0, appMarkerIndex) : lines;

    const apps = parse_app_lines(appLines);
    const categories = parse_category_lines(categoryLines).filter(
        (item) => !apps.some((app) => app.app_name.toLowerCase() === item.name.toLowerCase())
    );
    const total_minutes = extract_total_minutes(lines, rawText, apps, categories);

    return {
        raw_text: rawText,
        total_minutes,
        categories,
        apps,
    };
};

export const parse_screen_time_image_base64 = async (image_base64: string) => {
    const original = decode_data_url(image_base64);
    const processed = await preprocess_image(original);
    const { data } = await Tesseract.recognize(processed, "eng");

    return parse_screen_time_text(data.text ?? "");
};

export const normalize_screen_time_categories = (categories: unknown): CategoryUsage[] => {
    if (!Array.isArray(categories)) return [];

    return categories
        .map((item: any) => ({
            name: normalize_name(String(item?.name ?? "")),
            minutes: Number(item?.minutes) || 0,
        }))
        .filter((item) => item.name && Number.isFinite(item.minutes) && item.minutes >= 0);
};

export const normalize_screen_time_apps = (apps: unknown): AppUsage[] => {
    if (!Array.isArray(apps)) return [];

    return apps
        .map((item: any) => ({
            app_name: normalize_name(String(item?.app_name ?? "")),
            minutes: Number(item?.minutes) || 0,
        }))
        .filter((item) => item.app_name && Number.isFinite(item.minutes) && item.minutes >= 0);
};

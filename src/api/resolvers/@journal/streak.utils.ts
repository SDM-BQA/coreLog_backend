import { journal_model } from "../../models/@journal/journal";
import { journal_streak_model } from "../../models/@journal/journal-streak";

const DAY_MS = 24 * 60 * 60 * 1000;

const toIstDayKey = (value: string | Date) => {
    const date = new Date(value);
    const parts = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).formatToParts(date);

    const year = parts.find((p) => p.type === "year")?.value ?? "0000";
    const month = parts.find((p) => p.type === "month")?.value ?? "01";
    const day = parts.find((p) => p.type === "day")?.value ?? "01";
    return `${year}-${month}-${day}`;
};

const dayKeyToUtcMs = (dayKey: string) => {
    const [year, month, day] = dayKey.split("-").map(Number);
    return Date.UTC(year, month - 1, day);
};

export const recompute_journal_streak = async (user_id: any) => {
    const journals = await journal_model.find({ user_id }).select("date").lean();
    const uniqueDayKeys = Array.from(new Set(journals.map((j: any) => toIstDayKey(j.date))));
    const sortedDays = uniqueDayKeys
        .map((dayKey) => ({ dayKey, utcMs: dayKeyToUtcMs(dayKey) }))
        .sort((a, b) => a.utcMs - b.utcMs);

    let longest_streak = 0;
    let run = 0;
    let previousMs: number | null = null;

    for (const { utcMs } of sortedDays) {
        if (previousMs === null || utcMs - previousMs !== DAY_MS) run = 1;
        else run += 1;
        if (run > longest_streak) longest_streak = run;
        previousMs = utcMs;
    }

    const todayKey = toIstDayKey(new Date());
    const yesterdayKey = toIstDayKey(new Date(Date.now() - DAY_MS));
    const daySet = new Set(uniqueDayKeys);

    let current_streak = 0;
    let anchorMs: number | null = null;
    if (daySet.has(todayKey)) anchorMs = dayKeyToUtcMs(todayKey);
    else if (daySet.has(yesterdayKey)) anchorMs = dayKeyToUtcMs(yesterdayKey);

    while (anchorMs !== null) {
        const d = new Date(anchorMs);
        const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
        if (!daySet.has(key)) break;
        current_streak += 1;
        anchorMs -= DAY_MS;
    }

    const monthFormat = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
    });
    const currentMonth = monthFormat.format(new Date());
    const active_days_this_month = uniqueDayKeys.filter((dayKey) => {
        const d = new Date(dayKeyToUtcMs(dayKey));
        return monthFormat.format(d) === currentMonth;
    }).length;

    const last_entry_date = sortedDays.length ? sortedDays[sortedDays.length - 1].dayKey : null;

    const streak = await journal_streak_model.findOneAndUpdate(
        { user_id },
        {
            $set: {
                current_streak,
                longest_streak,
                total_active_days: uniqueDayKeys.length,
                active_days_this_month,
                last_entry_date,
                streak_updated_at: new Date().toISOString(),
            },
        },
        { upsert: true, new: true }
    );

    return streak;
};


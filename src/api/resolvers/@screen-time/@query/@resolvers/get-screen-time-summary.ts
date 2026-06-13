import { get_auth_user } from "../../../../../utils/auth.utils";
import { screen_time_model } from "../../../../models/@screen-time/screen-time";

export const get_screen_time_summary = async (
    _parent: any,
    args: { date_from?: string; date_to?: string },
    ctx: any
) => {
    try {
        const user = await get_auth_user(ctx.req);
        const filter: Record<string, any> = { user_id: user._id };

        if (args.date_from || args.date_to) {
            filter.entry_date = {};
            if (args.date_from) filter.entry_date.$gte = args.date_from;
            if (args.date_to) filter.entry_date.$lte = args.date_to;
        }

        const daily = await screen_time_model.find(filter).sort({ entry_date: -1, created_at: -1 });
        const total_days = daily.length;
        const total_minutes = daily.reduce((sum, entry) => sum + (entry.total_minutes || 0), 0);

        const appUsage = new Map<string, number>();
        for (const entry of daily) {
            for (const app of entry.apps ?? []) {
                const name = String(app.app_name ?? "").trim();
                if (!name) continue;
                appUsage.set(name, (appUsage.get(name) ?? 0) + (Number(app.minutes) || 0));
            }
        }

        let most_used_app: string | null = null;
        let most_used_app_minutes = 0;
        for (const [name, minutes] of appUsage.entries()) {
            if (minutes > most_used_app_minutes) {
                most_used_app = name;
                most_used_app_minutes = minutes;
            }
        }

        return {
            total_days,
            total_minutes,
            avg_daily_minutes: total_days ? Math.round(total_minutes / total_days) : 0,
            most_used_app,
            most_used_app_minutes,
            daily,
        };
    } catch (error: any) {
        console.error("Get Screen Time Summary Error:", error.message);
        throw new Error(error.message);
    }
};

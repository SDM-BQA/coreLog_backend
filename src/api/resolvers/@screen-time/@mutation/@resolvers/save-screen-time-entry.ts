import { get_auth_user } from "../../../../../utils/auth.utils";
import { screen_time_model } from "../../../../models/@screen-time/screen-time";
import {
    normalize_screen_time_apps,
    normalize_screen_time_categories,
} from "../../@shared/screen-time.utils";

export const save_screen_time_entry = async (
    _parent: any,
    args: {
        entry_date: string;
        categories?: Array<{ name: string; minutes: number }>;
        apps: Array<{ app_name: string; minutes: number }>;
        raw_text?: string;
        total_minutes?: number;
    },
    ctx: any
) => {
    try {
        const user = await get_auth_user(ctx.req);
        const categories = normalize_screen_time_categories(args.categories);
        const apps = normalize_screen_time_apps(args.apps);

        if (!args.entry_date?.trim()) {
            throw new Error("Entry date is required");
        }

        if (!apps.length && !categories.length) {
            throw new Error("At least one app or category usage entry is required");
        }

        const totalFromUsage = apps.reduce((sum, item) => sum + item.minutes, 0)
            || categories.reduce((sum, item) => sum + item.minutes, 0);

        const total_minutes = Math.max(0, Number(args.total_minutes) || totalFromUsage);

        const entry = await screen_time_model.findOneAndUpdate(
            {
                user_id: user._id,
                entry_date: args.entry_date.trim(),
            },
            {
                $set: {
                    categories,
                    apps,
                    raw_text: args.raw_text?.trim() || undefined,
                    total_minutes,
                },
            },
            {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
                runValidators: true,
            }
        );

        return entry;
    } catch (error: any) {
        console.error("Save Screen Time Entry Error:", error.message);
        throw new Error(error.message);
    }
};

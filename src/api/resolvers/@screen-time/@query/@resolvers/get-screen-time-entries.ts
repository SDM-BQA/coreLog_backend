import { get_auth_user } from "../../../../../utils/auth.utils";
import { screen_time_model } from "../../../../models/@screen-time/screen-time";

export const get_screen_time_entries = async (
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

        return await screen_time_model.find(filter).sort({ entry_date: -1, created_at: -1 });
    } catch (error: any) {
        console.error("Get Screen Time Entries Error:", error.message);
        throw new Error(error.message);
    }
};

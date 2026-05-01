import { get_auth_user } from "../../../../../utils/auth.utils";
import { series_log_model } from "../../../../models/@series/series-log/index.model";

export const add_series_log = async (_parent: any, args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const { series_id, input } = args;

        const log = new series_log_model({
            series_id,
            user_id: user._id,
            date: input.date,
            episodes_watched: input.episodes_watched,
            current_episode: input.current_episode,
            note: input.note,
        });

        await log.save();

        if (!user.library) user.library = { books: [], movies: [], series: [], book_logs: [], series_logs: [] };
        if (!user.library.series_logs) user.library.series_logs = [];
        user.library.series_logs.push(log._id);
        await user.save();

        return {
            ...log.toObject(),
            created_at: log.created_at?.toISOString(),
            updated_at: log.updated_at?.toISOString(),
        };
    } catch (error: any) {
        console.error("Add Series Log Error:", error.message);
        throw new Error(error.message);
    }
};

import { get_auth_user } from "../../../../../utils/auth.utils";
import { series_log_model } from "../../../../models/@series/series-log/index.model";

export const get_series_logs = async (_parent: any, args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const { series_id } = args;

        const logs = await series_log_model
            .find({ series_id, user_id: user._id })
            .sort({ date: 1 })
            .lean();

        return logs.map((log: any) => ({
            ...log,
            created_at: log.created_at?.toISOString(),
            updated_at: log.updated_at?.toISOString(),
        }));
    } catch (error: any) {
        console.error("Get Series Logs Error:", error.message);
        throw new Error(error.message);
    }
};

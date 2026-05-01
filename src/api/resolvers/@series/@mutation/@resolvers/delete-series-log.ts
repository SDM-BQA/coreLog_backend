import { get_auth_user } from "../../../../../utils/auth.utils";
import { series_log_model } from "../../../../models/@series/series-log/index.model";

export const delete_series_log = async (_parent: any, args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const { id } = args;

        const log = await series_log_model.findOneAndDelete({ _id: id, user_id: user._id });
        if (!log) throw new Error("Log entry not found or unauthorized");

        if (user.library?.series_logs) {
            user.library.series_logs = user.library.series_logs.filter(
                (logId: any) => logId.toString() !== id
            );
            await user.save();
        }

        return true;
    } catch (error: any) {
        console.error("Delete Series Log Error:", error.message);
        throw new Error(error.message);
    }
};

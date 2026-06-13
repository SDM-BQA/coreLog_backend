import { get_auth_user } from "../../../../../utils/auth.utils";
import { screen_time_model } from "../../../../models/@screen-time/screen-time";

export const delete_screen_time_entry = async (
    _parent: any,
    args: { entry_date: string },
    ctx: any
) => {
    try {
        const user = await get_auth_user(ctx.req);
        const result = await screen_time_model.deleteOne({
            user_id: user._id,
            entry_date: args.entry_date,
        });

        return result.deletedCount > 0;
    } catch (error: any) {
        console.error("Delete Screen Time Entry Error:", error.message);
        throw new Error(error.message);
    }
};

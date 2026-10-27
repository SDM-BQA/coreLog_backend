import { get_auth_user } from "../../../../../utils/auth.utils";
import { target_model } from "../../../../models/@target";

export const get_my_target = async (_parent: any, args: { year?: number }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const year = args.year ?? new Date().getFullYear();
        const target = await target_model.findOne({ user_id: user._id, year });
        return target ?? null;
    } catch (error: any) {
        console.error("Get My Target Error:", error.message);
        return null;
    }
};

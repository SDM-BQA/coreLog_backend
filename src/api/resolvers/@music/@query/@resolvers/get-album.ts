import { get_auth_user } from "../../../../../utils/auth.utils";
import { album_model } from "../../../../models/@music/album";

export const get_album = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const album = await album_model.findOne({ _id: args.id, user_id: user._id });
        return album;
    } catch (error: any) {
        console.error("Get Album Error:", error.message);
        return null;
    }
};

import { get_auth_user } from "../../../../../utils/auth.utils";
import { album_model } from "../../../../models/@music/album";

export const delete_album = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const result = await album_model.deleteOne({ _id: args.id, user_id: user._id });
        return result.deletedCount > 0;
    } catch (error: any) {
        console.error("Delete Album Error:", error.message);
        throw new Error(error.message);
    }
};

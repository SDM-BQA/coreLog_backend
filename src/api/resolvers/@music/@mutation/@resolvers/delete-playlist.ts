import { get_auth_user } from "../../../../../utils/auth.utils";
import { playlist_model } from "../../../../models/@music/playlist";

export const delete_playlist = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const result = await playlist_model.deleteOne({ _id: args.id, user_id: user._id });
        return result.deletedCount > 0;
    } catch (error: any) {
        console.error("Delete Playlist Error:", error.message);
        throw new Error(error.message);
    }
};

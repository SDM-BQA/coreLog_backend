import { get_auth_user } from "../../../../../utils/auth.utils";
import { playlist_model } from "../../../../models/@music/playlist";

export const get_playlist = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const playlist = await playlist_model.findOne({ _id: args.id, user_id: user._id });
        return playlist;
    } catch (error: any) {
        console.error("Get Playlist Error:", error.message);
        return null;
    }
};

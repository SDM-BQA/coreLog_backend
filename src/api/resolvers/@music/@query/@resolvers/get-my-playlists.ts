import { get_auth_user } from "../../../../../utils/auth.utils";
import { playlist_model } from "../../../../models/@music/playlist";

export const get_my_playlists = async (_parent: any, _args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const playlists = await playlist_model.find({ user_id: user._id }).sort({ created_at: -1 });
        return playlists;
    } catch (error: any) {
        console.error("Get My Playlists Error:", error.message);
        return [];
    }
};

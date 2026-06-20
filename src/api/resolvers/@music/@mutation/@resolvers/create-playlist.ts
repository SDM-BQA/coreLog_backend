import { get_auth_user } from "../../../../../utils/auth.utils";
import { playlist_model } from "../../../../models/@music/playlist";

export const create_playlist = async (_parent: any, args: { input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const playlist = await playlist_model.create({ ...args.input, user_id: user._id });
        return playlist;
    } catch (error: any) {
        console.error("Create Playlist Error:", error.message);
        throw new Error(error.message);
    }
};

import { get_auth_user } from "../../../../../utils/auth.utils";
import { playlist_model } from "../../../../models/@music/playlist";

export const update_playlist = async (_parent: any, args: { id: string; input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const playlist = await playlist_model.findOneAndUpdate(
            { _id: args.id, user_id: user._id },
            { $set: args.input },
            { new: true }
        );
        return playlist;
    } catch (error: any) {
        console.error("Update Playlist Error:", error.message);
        throw new Error(error.message);
    }
};

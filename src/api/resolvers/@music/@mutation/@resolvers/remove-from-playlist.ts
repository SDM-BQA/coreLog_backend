import { get_auth_user } from "../../../../../utils/auth.utils";
import { playlist_model } from "../../../../models/@music/playlist";

export const remove_from_playlist = async (
    _parent: any,
    args: { playlist_id: string; item_id: string },
    ctx: any
) => {
    try {
        const user = await get_auth_user(ctx.req);

        const playlist = await playlist_model.findOneAndUpdate(
            { _id: args.playlist_id, user_id: user._id },
            { $pull: { items: { item_id: args.item_id } } },
            { new: true }
        );

        if (!playlist) throw new Error("Playlist not found.");
        return playlist;
    } catch (error: any) {
        console.error("Remove From Playlist Error:", error.message);
        throw new Error(error.message);
    }
};

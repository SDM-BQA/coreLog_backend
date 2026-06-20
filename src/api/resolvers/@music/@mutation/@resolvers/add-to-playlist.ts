import { get_auth_user } from "../../../../../utils/auth.utils";
import { playlist_model } from "../../../../models/@music/playlist";

export const add_to_playlist = async (
    _parent: any,
    args: { playlist_id: string; item_id: string; item_type: string },
    ctx: any
) => {
    try {
        const user = await get_auth_user(ctx.req);

        const already = await playlist_model.findOne({
            _id: args.playlist_id,
            user_id: user._id,
            "items.item_id": args.item_id,
        });

        if (already) throw new Error("Item is already in this playlist.");

        const playlist = await playlist_model.findOneAndUpdate(
            { _id: args.playlist_id, user_id: user._id },
            {
                $push: {
                    items: {
                        item_id:  args.item_id,
                        item_type: args.item_type,
                        added_at: new Date().toISOString(),
                    },
                },
            },
            { new: true }
        );

        if (!playlist) throw new Error("Playlist not found.");
        return playlist;
    } catch (error: any) {
        console.error("Add To Playlist Error:", error.message);
        throw new Error(error.message);
    }
};

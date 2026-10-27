import { get_auth_user } from "../../../../../utils/auth.utils";
import { song_model } from "../../../../models/@music/song";

export const update_song = async (_parent: any, args: { id: string; input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const song = await song_model.findOneAndUpdate(
            { _id: args.id, user_id: user._id },
            { $set: args.input },
            { new: true }
        );
        return song;
    } catch (error: any) {
        console.error("Update Song Error:", error.message);
        throw new Error(error.message);
    }
};

import { get_auth_user } from "../../../../../utils/auth.utils";
import { song_model } from "../../../../models/@music/song";

export const get_song = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const song = await song_model.findOne({ _id: args.id, user_id: user._id });
        return song;
    } catch (error: any) {
        console.error("Get Song Error:", error.message);
        return null;
    }
};

import { get_auth_user } from "../../../../../utils/auth.utils";
import { song_model } from "../../../../models/@music/song";

export const delete_song = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const result = await song_model.deleteOne({ _id: args.id, user_id: user._id });
        return result.deletedCount > 0;
    } catch (error: any) {
        console.error("Delete Song Error:", error.message);
        throw new Error(error.message);
    }
};

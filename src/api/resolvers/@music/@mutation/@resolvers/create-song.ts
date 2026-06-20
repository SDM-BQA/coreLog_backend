import { get_auth_user } from "../../../../../utils/auth.utils";
import { song_model } from "../../../../models/@music/song";

export const create_song = async (_parent: any, args: { input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);

        const existing = await song_model.findOne({
            user_id: user._id,
            title:  { $regex: new RegExp(`^${args.input.title}$`, "i") },
            artist: { $regex: new RegExp(`^${args.input.artist}$`, "i") },
        });

        if (existing) {
            throw new Error(`"${args.input.title}" by ${args.input.artist} is already in your collection.`);
        }

        const song = await song_model.create({ ...args.input, user_id: user._id });
        return song;
    } catch (error: any) {
        console.error("Create Song Error:", error.message);
        throw new Error(error.message);
    }
};

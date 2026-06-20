import { get_auth_user } from "../../../../../utils/auth.utils";
import { album_model } from "../../../../models/@music/album";

export const update_album = async (_parent: any, args: { id: string; input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const album = await album_model.findOneAndUpdate(
            { _id: args.id, user_id: user._id },
            { $set: args.input },
            { new: true }
        );
        return album;
    } catch (error: any) {
        console.error("Update Album Error:", error.message);
        throw new Error(error.message);
    }
};

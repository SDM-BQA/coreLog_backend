import { get_auth_user } from "../../../../../utils/auth.utils";
import { poem_model } from "../../../../models/@poetry";

export const update_poem = async (_parent: any, args: { id: string, input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const poem = await poem_model.findOneAndUpdate(
            { _id: args.id, user_id: user._id },
            { $set: args.input },
            { new: true }
        );
        if (!poem) {
            throw new Error("Poem not found or you don't have permission to update it.");
        }
        return poem;
    } catch (error: any) {
        console.error("Update Poem Error:", error.message);
        throw new Error(error.message);
    }
};

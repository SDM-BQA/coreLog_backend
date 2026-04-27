import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_model } from "../../../../models/@journal";

export const update_journal = async (_parent: any, args: { id: string; input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);

        const journal = await journal_model.findOneAndUpdate(
            { _id: args.id, user_id: user._id },
            { $set: args.input },
            { new: true }
        );

        if (!journal) throw new Error("Journal entry not found or access denied.");
        return journal;
    } catch (error: any) {
        console.error("Update Journal Error:", error.message);
        throw new Error(error.message);
    }
};

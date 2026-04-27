import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_model } from "../../../../models/@journal";

export const delete_journal = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);

        const result = await journal_model.deleteOne({ _id: args.id, user_id: user._id });
        if (result.deletedCount === 0) throw new Error("Journal entry not found or access denied.");
        return true;
    } catch (error: any) {
        console.error("Delete Journal Error:", error.message);
        throw new Error(error.message);
    }
};

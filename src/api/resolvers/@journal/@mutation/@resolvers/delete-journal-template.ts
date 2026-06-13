import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_template_model } from "../../../../models/@journal/journal-template";

export const delete_journal_template = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const result = await journal_template_model.deleteOne({ _id: args.id, user_id: user._id });
        return result.deletedCount > 0;
    } catch (error: any) {
        console.error("Delete Journal Template Error:", error.message);
        throw new Error(error.message);
    }
};

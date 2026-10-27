import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_template_model } from "../../../../models/@journal/journal-template";

export const get_journal_templates = async (_parent: any, _args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);

        return await journal_template_model
            .find({ user_id: user._id })
            .sort({ updated_at: -1, created_at: -1 });
    } catch (error: any) {
        console.error("Get Journal Templates Error:", error.message);
        return [];
    }
};

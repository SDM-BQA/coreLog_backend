import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_template_model } from "../../../../models/@journal/journal-template";

const normalize_template_input = (input: any) => ({
    name: String(input?.name ?? "").trim(),
    content: String(input?.content ?? "").trim(),
    category: input?.category ? String(input.category).trim() : undefined,
});

export const update_journal_template = async (_parent: any, args: { id: string; input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const payload = normalize_template_input(args.input);

        if (!payload.name) throw new Error("Template name is required.");
        if (!payload.content) throw new Error("Template content is required.");

        const template = await journal_template_model.findOneAndUpdate(
            { _id: args.id, user_id: user._id },
            { $set: payload },
            { new: true }
        );

        if (!template) throw new Error("Journal template not found or access denied.");
        return template;
    } catch (error: any) {
        console.error("Update Journal Template Error:", error.message);
        throw new Error(error.message);
    }
};

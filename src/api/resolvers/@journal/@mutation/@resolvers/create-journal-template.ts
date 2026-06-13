import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_template_model } from "../../../../models/@journal/journal-template";

const normalize_template_input = (input: any) => ({
    name: String(input?.name ?? "").trim(),
    content: String(input?.content ?? "").trim(),
    category: input?.category ? String(input.category).trim() : undefined,
});

export const create_journal_template = async (_parent: any, args: { input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const payload = normalize_template_input(args.input);

        if (!payload.name) throw new Error("Template name is required.");
        if (!payload.content) throw new Error("Template content is required.");

        return await journal_template_model.create({
            ...payload,
            user_id: user._id,
        });
    } catch (error: any) {
        console.error("Create Journal Template Error:", error.message);
        throw new Error(error.message);
    }
};

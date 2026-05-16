import { user_model } from "../../../../models/@user";
import { get_auth_user } from "../../../../../utils/auth.utils";

export const update_user_account = async (
    _parent: any,
    { id, input }: { id: string; input: any },
    ctx: any
) => {
    try {
        const authUser = await get_auth_user(ctx.req);
        if (authUser._id.toString() !== id) {
            throw new Error("Unauthorized update request");
        }

        const safeInput = { ...input };
        delete safeInput.email_id;

        // Find and update using atomic $set
        // { new: true } returns the document AFTER the update
        const updatedUser = await user_model.findByIdAndUpdate(
            id,
            { $set: safeInput },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            throw new Error("User not found");
        }

        return updatedUser;
    } catch (error: any) {
        console.error("update_user_account error:", error);
        throw new Error(error.message || "Failed to update user account");
    }
};

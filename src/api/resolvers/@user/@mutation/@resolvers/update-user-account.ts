import { user_model } from "../../../../models/@user";

export const update_user_account = async (
    _parent: any,
    { id, input }: { id: string; input: any }
) => {
    try {
        // Find and update using atomic $set
        // { new: true } returns the document AFTER the update
        const updatedUser = await user_model.findByIdAndUpdate(
            id,
            { $set: input },
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
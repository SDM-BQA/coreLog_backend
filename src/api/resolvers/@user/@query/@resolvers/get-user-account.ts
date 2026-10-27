import { user_model } from "../../../../models/@user";

export const get_user_account = async (_parent: any, args: any, _ctx: any) => {
    const { id } = args;

    try {
        const user = await user_model.findById(id);
        if (!user) {
            throw new Error("User not found");
        }

        if (
            user.plan === "inner_circle" &&
            user.inner_circle_expires_at &&
            new Date(user.inner_circle_expires_at).getTime() <= Date.now()
        ) {
            user.plan = "free";
            await user.save();
        }

        return user;
    } catch (error) {
        console.error(error)
        return null
    }
};

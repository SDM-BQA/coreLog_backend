import { user_model } from "../../../../models/@user"

export const update_user_account = async (
    _parent: any,
    args: any,
    _ctx: any
) => {

    try {
        const args_input = args.input
        const user = await user_model.findById(args.id)
        if (!user) {
            throw new Error("user not found")
        }
        user.set(args_input || {})
        await user.save()
        return user
    }
    catch (error) {
        console.log(error)
        return null
    }
}
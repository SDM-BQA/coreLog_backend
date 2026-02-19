import { user_model } from "../../../../models/@user"

export const delete_user_account = async (
    _parent: any,
    args: any,
    _ctx: any
) => {
    try {
        const args_id = args.id
        const user = await user_model.findById(args_id)
        if (!user) {
            throw new Error("user not found")
        }
        await user.deleteOne()
        return true
    }
    catch (error) {
        console.log(error)
        return false
    }
}
import { sign_access_token, sign_refresh_token } from "../../../../../utils/jwt.utils";
import { user_model } from "../../../../models/@user";

export const create_user_account = async (
    _parent: any,
    args: any,
    ctx: any
) => {
    try {
        const args_input = args.input
        const newUser = new user_model({
            first_name: args_input.first_name,
            last_name: args_input.last_name,
            email_id: args_input.email_id,
            password: args_input.password,
            gender: args_input.gender,
            // profile_pic: args?.profile_pic || "/profile_pic.png",
            profile_pic:  "",
            mobile_no: args_input.mobile_no,
            user_name: args_input.user_name,
        });

        await newUser.save();

        const payload = {
            userId: newUser._id.toString(),
        };

        const accessToken = sign_access_token(payload);
        const refreshToken = sign_refresh_token(payload);

        return {
            accessToken,
            refreshToken,
            user: newUser,
        }
    }
    catch (error) {
        console.log(error)
        return null
    }
};

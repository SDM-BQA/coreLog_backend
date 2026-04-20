import { create_user_account, update_user_account, delete_user_account, send_otp, verify_otp, login_user_account } from "./@resolvers";

const user_mutation = {
    create_user_account,
    update_user_account,
    delete_user_account,
    send_otp,
    verify_otp,
    login_user_account,
}

export { user_mutation }
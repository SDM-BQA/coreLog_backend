import { get_user_account, get_all_user_accounts, check_email_exists, check_username_exists } from "./@resolvers";

const user_query = {
    get_user_account,
    get_all_user_accounts,
    check_email_exists,
    check_username_exists,
}

export { user_query }
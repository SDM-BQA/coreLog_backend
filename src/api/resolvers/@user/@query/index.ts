import { get_user_account, get_all_user_accounts, check_email_exists, check_username_exists, get_dashboard_stats } from "./@resolvers";

const user_query = {
    get_user_account,
    get_all_user_accounts,
    check_email_exists,
    check_username_exists,
    get_dashboard_stats,
}

export { user_query }
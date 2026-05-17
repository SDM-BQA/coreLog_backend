import { get_user_account, get_all_user_accounts, check_email_exists, check_username_exists, get_dashboard_stats, get_inner_circle_status } from "./@resolvers";

const user_query = {
    get_user_account,
    get_all_user_accounts,
    check_email_exists,
    check_username_exists,
    get_dashboard_stats,
    get_inner_circle_status,
}

export { user_query }

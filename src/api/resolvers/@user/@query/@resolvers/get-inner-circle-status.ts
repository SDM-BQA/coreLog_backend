import { get_auth_user } from "../../../../../utils/auth.utils";

export const get_inner_circle_status = async (_parent: any, _args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const now = new Date();
        const expiresAt = user.inner_circle_expires_at ? new Date(user.inner_circle_expires_at) : null;
        const startedAt = user.inner_circle_started_at ? new Date(user.inner_circle_started_at) : null;

        let isActive = user.plan === "inner_circle" && !!expiresAt && expiresAt.getTime() > now.getTime();

        if (user.plan === "inner_circle" && (!expiresAt || expiresAt.getTime() <= now.getTime())) {
            user.plan = "free";
            await user.save();
            isActive = false;
        }

        const daysLeft = isActive && expiresAt
            ? Math.max(0, Math.ceil((expiresAt.getTime() - now.getTime()) / (24 * 60 * 60 * 1000)))
            : 0;

        return {
            plan: isActive ? "inner_circle" : "free",
            is_active: isActive,
            started_at: startedAt ? startedAt.toISOString() : null,
            expires_at: expiresAt ? expiresAt.toISOString() : null,
            days_left: daysLeft,
            renewal_cycle: "monthly",
            email: user.inner_circle_email || null,
        };
    } catch (error: any) {
        console.error("get_inner_circle_status error:", error);
        return {
            plan: "free",
            is_active: false,
            started_at: null,
            expires_at: null,
            days_left: 0,
            renewal_cycle: "monthly",
            email: null,
        };
    }
};

import { Email } from "./email.class";

export const send_inner_circle_otp_email = async (to: string, otp: string) => {
    const body = `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: auto; padding: 24px; border: 1px solid #e6e6e6; border-radius: 14px; background: #ffffff;">
            <div style="text-align: center; margin-bottom: 16px;">
                <h2 style="margin: 0; color: #1f2937;">Welcome to CoreLog Inner Circle</h2>
                <p style="margin: 8px 0 0; font-size: 14px; color: #6b7280;">Your membership activation code is ready.</p>
            </div>

            <div style="margin: 20px 0; text-align: center; background: #f8fafc; border: 1px dashed #6366f1; border-radius: 12px; padding: 18px;">
                <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; color: #6b7280;">Inner Circle OTP</p>
                <p style="margin: 0; font-size: 30px; font-weight: 800; letter-spacing: 6px; color: #111827;">${otp}</p>
            </div>

            <div style="font-size: 14px; color: #4b5563; line-height: 1.6;">
                <p style="margin: 0 0 10px;">Use this OTP to activate or renew your Inner Circle membership.</p>
                <p style="margin: 0 0 10px;">This code is valid for <strong>10 minutes</strong>.</p>
                <p style="margin: 0;">If you didn’t request this, you can safely ignore this email.</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #edf2f7; margin: 20px 0;">
            <p style="margin: 0; text-align: center; font-size: 12px; color: #9ca3af;">CoreLog • Inner Circle Access</p>
        </div>
    `;

    const mail = new Email([to], "Your CoreLog Inner Circle OTP", body, "html");
    return await mail.send();
};

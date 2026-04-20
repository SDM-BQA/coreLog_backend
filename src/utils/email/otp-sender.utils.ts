import { Email } from "./email.class";

export const send_otp_email = async (to: string, otp: string) => {
    const body = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #333; text-align: center;">Welcome to CoreLog!</h2>
            <p style="font-size: 16px; color: #555;">To complete your registration, please use the following One-Time Password (OTP):</p>
            <div style="font-size: 24px; font-weight: bold; color: #4A90E2; text-align: center; padding: 10px; border: 1px dashed #4A90E2; background: #F4F9FF; margin: 20px 0;">
                ${otp}
            </div>
            <p style="font-size: 14px; color: #777; text-align: center;">This code is valid for 10 minutes. Please do not share it with anyone.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 12px; color: #aaa; text-align: center;">If you didn't request this code, you can safely ignore this email.</p>
        </div>
    `;

    const mail = new Email([to], "Your OTP Verification Code", body, "html");
    return await mail.send();
};

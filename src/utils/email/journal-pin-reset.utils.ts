import { Email } from "./email.class";

export const send_journal_pin_reset_email = async (to: string, otp: string) => {
    const body = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f0f;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1a1a1a;border-radius:20px;overflow:hidden;border:1px solid #2a2a2a;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);padding:36px 40px;text-align:center;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:16px;">
                    <div style="display:inline-block;background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.3);border-radius:16px;padding:14px 18px;font-size:28px;line-height:1;">
                      📔
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#8b5cf6;">CoreLog Journal</p>
                    <h1 style="margin:8px 0 0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Journal PIN Reset</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 12px;font-size:15px;color:#a0a0a0;line-height:1.6;">
                We received a request to reset your <strong style="color:#e0e0e0;">Personal Journal PIN</strong> on CoreLog.
                Use the verification code below to proceed.
              </p>
              <p style="margin:0 0 28px;font-size:13px;color:#6b6b6b;line-height:1.6;">
                If you didn't request this, your journal is safe — you can ignore this email and your PIN will remain unchanged.
              </p>

              <!-- OTP Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td align="center">
                    <div style="background:#0f0f0f;border:1px solid #2a2a2a;border-radius:16px;padding:28px 40px;display:inline-block;">
                      <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#6b6b6b;">Your Reset Code</p>
                      <p style="margin:0;font-size:42px;font-weight:900;letter-spacing:12px;color:#8b5cf6;font-family:'Courier New',monospace;">${otp}</p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Validity note -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                <tr>
                  <td style="background:#1f1a2e;border:1px solid #2d2040;border-radius:12px;padding:14px 20px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right:10px;font-size:18px;">⏱️</td>
                        <td style="font-size:13px;color:#a0a0a0;line-height:1.5;">
                          This code is valid for <strong style="color:#e0e0e0;">10 minutes</strong> and can only be used once.
                          Do not share it with anyone.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid #2a2a2a;margin:0;">
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <p style="margin:0 0 6px;font-size:12px;color:#4b4b4b;">
                      🔒 &nbsp;This reset is only for your <strong style="color:#6b6b6b;">Personal Journal</strong> inside CoreLog.
                    </p>
                    <p style="margin:0;font-size:11px;color:#3a3a3a;">
                      CoreLog &nbsp;·&nbsp; Your personal media universe
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
    `;

    const mail = new Email([to], "🔐 Journal PIN Reset — CoreLog", body, "html");
    return await mail.send();
};

import { parse_screen_time_image_base64 } from "../../@shared/screen-time.utils";

export const parse_screen_time_image = async (_parent: any, args: { image_base64: string }) => {
    try {
        return await parse_screen_time_image_base64(args.image_base64);
    } catch (error: any) {
        console.error("Parse Screen Time Image Error:", error.message);
        throw new Error(error.message || "Failed to parse screen time image");
    }
};

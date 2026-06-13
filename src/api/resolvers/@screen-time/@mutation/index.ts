import { parse_screen_time_image } from "./@resolvers/parse-screen-time-image";
import { save_screen_time_entry } from "./@resolvers/save-screen-time-entry";
import { delete_screen_time_entry } from "./@resolvers/delete-screen-time-entry";

export const screen_time_mutations = {
    parse_screen_time_image,
    save_screen_time_entry,
    delete_screen_time_entry,
};

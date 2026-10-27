import { get_auth_user } from "../../../../../utils/auth.utils";
import { song_model } from "../../../../models/@music/song";
import { album_model } from "../../../../models/@music/album";

export const get_music_filters = async (_parent: any, _args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const uid = user._id;

        const [
            song_genres,
            album_genres,
            song_statuses,
            album_statuses,
            song_languages,
            album_languages,
            song_platforms,
            album_platforms,
            song_artists,
            album_artists,
            song_years,
            album_years,
        ] = await Promise.all([
            song_model.distinct("genres",       { user_id: uid }),
            album_model.distinct("genres",      { user_id: uid }),
            song_model.distinct("status",       { user_id: uid }),
            album_model.distinct("status",      { user_id: uid }),
            song_model.distinct("language",     { user_id: uid }),
            album_model.distinct("language",    { user_id: uid }),
            song_model.distinct("platform",     { user_id: uid }),
            album_model.distinct("platform",    { user_id: uid }),
            song_model.distinct("artist",       { user_id: uid }),
            album_model.distinct("artist",      { user_id: uid }),
            song_model.distinct("release_year", { user_id: uid }),
            album_model.distinct("release_year",{ user_id: uid }),
        ]);

        const merge_unique = (...arrs: string[][]) =>
            [...new Set(arrs.flat().filter(Boolean))].sort();

        return {
            genres:    merge_unique(song_genres,    album_genres),
            statuses:  merge_unique(song_statuses,  album_statuses),
            languages: merge_unique(song_languages, album_languages),
            platforms: merge_unique(song_platforms, album_platforms),
            artists:   merge_unique(song_artists,   album_artists),
            years:     merge_unique(song_years,     album_years),
        };
    } catch (error: any) {
        console.error("Get Music Filters Error:", error.message);
        return { genres: [], statuses: [], languages: [], platforms: [], artists: [], years: [] };
    }
};

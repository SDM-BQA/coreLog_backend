import { get_my_songs }      from "./@resolvers/get-my-songs";
import { get_song }          from "./@resolvers/get-song";
import { get_my_albums }     from "./@resolvers/get-my-albums";
import { get_album }         from "./@resolvers/get-album";
import { get_my_playlists }  from "./@resolvers/get-my-playlists";
import { get_playlist }      from "./@resolvers/get-playlist";
import { get_music_filters } from "./@resolvers/get-music-filters";

export const music_queries = {
    get_my_songs,
    get_song,
    get_my_albums,
    get_album,
    get_my_playlists,
    get_playlist,
    get_music_filters,
};

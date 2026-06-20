import { create_song }           from "./@resolvers/create-song";
import { update_song }           from "./@resolvers/update-song";
import { delete_song }           from "./@resolvers/delete-song";
import { create_album }          from "./@resolvers/create-album";
import { update_album }          from "./@resolvers/update-album";
import { delete_album }          from "./@resolvers/delete-album";
import { create_playlist }       from "./@resolvers/create-playlist";
import { update_playlist }       from "./@resolvers/update-playlist";
import { delete_playlist }       from "./@resolvers/delete-playlist";
import { add_to_playlist }       from "./@resolvers/add-to-playlist";
import { remove_from_playlist }  from "./@resolvers/remove-from-playlist";

export const music_mutations = {
    create_song,
    update_song,
    delete_song,
    create_album,
    update_album,
    delete_album,
    create_playlist,
    update_playlist,
    delete_playlist,
    add_to_playlist,
    remove_from_playlist,
};

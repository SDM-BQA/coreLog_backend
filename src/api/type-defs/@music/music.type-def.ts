import { gql } from "graphql-tag";

export const music_type_defs = gql`
    # ─── Song ───────────────────────────────────────────────────────────────

    type Song {
        _id: ID!
        title: String!
        artist: String!
        artist_type: String!
        album_name: String
        cover_image: String
        description: String
        genres: [String!]!
        release_year: String!
        duration_ms: Int
        language: String
        platform: String
        status: String!
        rating: Float!
        review: String
        preview_url: String
        itunes_id: String
        started_from: String
        finished_on: String
        user_id: ID!
        created_at: String
        updated_at: String
    }

    input SongFilter {
        search: String
        genres: [String!]
        status: [String!]
        rating: Float
        artists: [String!]
        languages: [String!]
        platforms: [String!]
        page: Int
        limit: Int
    }

    type SongPage {
        songs: [Song!]!
        total_count: Int!
        current_page: Int!
        per_page: Int!
        page_count: Int!
        has_next_page: Boolean!
    }

    input CreateSongInput {
        title: String!
        artist: String!
        artist_type: String!
        album_name: String
        cover_image: String
        description: String
        genres: [String!]!
        release_year: String!
        duration_ms: Int
        language: String
        platform: String
        status: String!
        rating: Float!
        review: String
        preview_url: String
        itunes_id: String
        started_from: String
        finished_on: String
    }

    input UpdateSongInput {
        title: String
        artist: String
        artist_type: String
        album_name: String
        cover_image: String
        description: String
        genres: [String!]
        release_year: String
        duration_ms: Int
        language: String
        platform: String
        status: String
        rating: Float
        review: String
        preview_url: String
        started_from: String
        finished_on: String
    }

    # ─── Album ──────────────────────────────────────────────────────────────

    type Album {
        _id: ID!
        title: String!
        artist: String!
        artist_type: String!
        cover_image: String
        description: String
        genres: [String!]!
        release_year: String!
        total_tracks: Int
        language: String
        platform: String
        status: String!
        rating: Float!
        review: String
        itunes_id: String
        user_id: ID!
        created_at: String
        updated_at: String
    }

    input AlbumFilter {
        search: String
        genres: [String!]
        status: [String!]
        rating: Float
        artists: [String!]
        languages: [String!]
        platforms: [String!]
        page: Int
        limit: Int
    }

    type AlbumPage {
        albums: [Album!]!
        total_count: Int!
        current_page: Int!
        per_page: Int!
        page_count: Int!
        has_next_page: Boolean!
    }

    input CreateAlbumInput {
        title: String!
        artist: String!
        artist_type: String!
        cover_image: String
        description: String
        genres: [String!]!
        release_year: String!
        total_tracks: Int
        language: String
        platform: String
        status: String!
        rating: Float!
        review: String
        itunes_id: String
    }

    input UpdateAlbumInput {
        title: String
        artist: String
        artist_type: String
        cover_image: String
        description: String
        genres: [String!]
        release_year: String
        total_tracks: Int
        language: String
        platform: String
        status: String
        rating: Float
        review: String
    }

    # ─── Playlist ────────────────────────────────────────────────────────────

    type PlaylistSmartFilter {
        artist: String
        genre: String
        year: String
    }

    type PlaylistItem {
        item_id: ID!
        item_type: String!
        added_at: String!
    }

    type Playlist {
        _id: ID!
        name: String!
        description: String
        type: String!
        smart_filter: PlaylistSmartFilter
        items: [PlaylistItem!]!
        user_id: ID!
        created_at: String
        updated_at: String
    }

    input PlaylistSmartFilterInput {
        artist: String
        genre: String
        year: String
    }

    input CreatePlaylistInput {
        name: String!
        description: String
        type: String!
        smart_filter: PlaylistSmartFilterInput
    }

    input UpdatePlaylistInput {
        name: String
        description: String
        smart_filter: PlaylistSmartFilterInput
    }

    # ─── Filters ─────────────────────────────────────────────────────────────

    type MusicFilters {
        genres: [String!]!
        statuses: [String!]!
        languages: [String!]!
        platforms: [String!]!
        artists: [String!]!
        years: [String!]!
    }

    # ─── Queries & Mutations ─────────────────────────────────────────────────

    extend type Query {
        get_my_songs(filter: SongFilter): SongPage!
        get_song(id: ID!): Song
        get_my_albums(filter: AlbumFilter): AlbumPage!
        get_album(id: ID!): Album
        get_my_playlists: [Playlist!]!
        get_playlist(id: ID!): Playlist
        get_music_filters: MusicFilters!
    }

    extend type Mutation {
        create_song(input: CreateSongInput!): Song!
        update_song(id: ID!, input: UpdateSongInput!): Song!
        delete_song(id: ID!): Boolean!
        create_album(input: CreateAlbumInput!): Album!
        update_album(id: ID!, input: UpdateAlbumInput!): Album!
        delete_album(id: ID!): Boolean!
        create_playlist(input: CreatePlaylistInput!): Playlist!
        update_playlist(id: ID!, input: UpdatePlaylistInput!): Playlist!
        delete_playlist(id: ID!): Boolean!
        add_to_playlist(playlist_id: ID!, item_id: ID!, item_type: String!): Playlist!
        remove_from_playlist(playlist_id: ID!, item_id: ID!): Playlist!
    }
`;

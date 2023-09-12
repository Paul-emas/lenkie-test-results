export interface ApiGenericResponse<T> {
  success: boolean;
  data: T;
  message: string;
  status: number;
}

export interface ErrorInterface {
  data: {
    errors:
      | [
          {
            message: string;
          }
        ]
      | [];
  };
  message: string;
  status: number;
  success: boolean;
}

export type ArtistType = {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
};

export type PlaylistItemType = {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: true;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: ArtistType;
  album: {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string;
  };
  type: string;
};

export type PlaylistType = {
  checksum: string;
  collaborative: false;
  creation_date: string;
  creator: { id: number; name: string };
  description: string;
  duration: number;
  fans: number;
  id: number;
  is_loved_track: boolean;
  link: string;
  md5_image: string;
  nb_tracks: number;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_type: string;
  picture_xl: string;
  public: true;
  share: string;
  title: string;
  tracklist: string;
  tracks: {
    checksum: string;
    data: PlaylistItemType[];
  };
  type: string;
};

export type ContributorType = {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
  role: string;
};

export type GenreType = {
  id: number;
  name: string;
  picture: string;
  type: string;
};

export type AlbumType = {
  id: number;
  title: string;
  upc: string;
  link: string;
  share: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  genre_id: number;
  genres: {
    data: GenreType[];
  };
  label: string;
  nb_tracks: number;
  duration: number;
  fans: number;
  release_date: string;
  record_type: string;
  available: true;
  tracklist: string;
  explicit_lyrics: false;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  contributors: ContributorType[];
  artist: ArtistType;
  type: string;
  tracks: {
    data: PlaylistItemType[];
  };
};

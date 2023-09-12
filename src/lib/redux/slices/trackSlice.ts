import { AlbumType, PlaylistItemType, PlaylistType } from '@/types/shared';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchFeaturedAlbums,
  fetchMarshmelloTracks,
  fetchPopularPlaylistArtists,
  fetchRbTracks,
  fetchTrendingPlaylist
} from '../services';

type initialStateTypes = {
  loading: boolean;
  trendingPlaylists: PlaylistType | null;
  poularPlaylists: PlaylistItemType[];
  marshmellowPlaylists: PlaylistItemType[];
  rbPlaylists: PlaylistItemType[];
  featuredAlbums: AlbumType | null;
};

const initialState: initialStateTypes = {
  loading: true,
  trendingPlaylists: null,
  marshmellowPlaylists: [],
  rbPlaylists: [],
  poularPlaylists: [],
  featuredAlbums: null
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMarshmelloTracks.fulfilled, (state, action) => {
      state.marshmellowPlaylists = action.payload;
    });
    builder.addCase(fetchRbTracks.fulfilled, (state, action) => {
      state.rbPlaylists = action.payload;
    });
    builder.addCase(fetchTrendingPlaylist.fulfilled, (state, action) => {
      state.trendingPlaylists = action.payload;
    });
    builder.addCase(fetchFeaturedAlbums.fulfilled, (state, action) => {
      state.featuredAlbums = action.payload;
    });
    builder.addCase(fetchPopularPlaylistArtists.fulfilled, (state, action) => {
      state.poularPlaylists = action.payload;
    });
    builder.addMatcher(
      isAnyOf(
        fetchMarshmelloTracks.fulfilled,
        fetchTrendingPlaylist.fulfilled,
        fetchRbTracks.fulfilled,
        fetchFeaturedAlbums.fulfilled,
        fetchPopularPlaylistArtists.fulfilled
      ),
      state => {
        state.loading = false;
      }
    );
  }
});

export default trackSlice.reducer;

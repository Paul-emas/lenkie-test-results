import { AlbumType, PlaylistItemType, PlaylistType } from '@/types/shared';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchFeaturedAlbums,
  fetchEminemTracks,
  fetchMarshmelloTracks,
  fetchPopularPlaylistArtists,
  fetchRbTracks,
  fetchTrendingPlaylist,
  fetchJonBellionTracks
} from '../services';

type initialStateTypes = {
  loading: boolean;
  pageLoading: boolean;
  trendingPlaylists: PlaylistType | null;
  poularPlaylists: PlaylistItemType[];
  marshmellowPlaylists: PlaylistItemType[];
  jobBellionPlaylists: PlaylistItemType[];
  eminemPlaylists: PlaylistItemType[];
  rbPlaylists: PlaylistItemType[];
  featuredAlbums: PlaylistType | null;
};

const initialState: initialStateTypes = {
  loading: true,
  pageLoading: true,
  trendingPlaylists: null,
  marshmellowPlaylists: [],
  rbPlaylists: [],
  eminemPlaylists: [],
  jobBellionPlaylists: [],
  poularPlaylists: [],
  featuredAlbums: null
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    handleLoading: (state, action) => void (state.loading = action.payload),
    handlePageLoading: (state, action) => void (state.pageLoading = action.payload)
  },
  extraReducers: builder => {
    builder.addCase(fetchMarshmelloTracks.fulfilled, (state, action) => {
      state.marshmellowPlaylists = action.payload;
    });
    builder.addCase(fetchRbTracks.fulfilled, (state, action) => {
      state.rbPlaylists = action.payload;
    });
    builder.addCase(fetchEminemTracks.fulfilled, (state, action) => {
      state.eminemPlaylists = action.payload;
    });
    builder.addCase(fetchJonBellionTracks.fulfilled, (state, action) => {
      state.jobBellionPlaylists = action.payload;
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
        fetchEminemTracks.fulfilled,
        fetchRbTracks.fulfilled,
        fetchJonBellionTracks.fulfilled,
        fetchFeaturedAlbums.fulfilled,
        fetchPopularPlaylistArtists.fulfilled
      ),
      state => {
        state.loading = false;
      }
    );
  }
});

export const { handleLoading, handlePageLoading } = trackSlice.actions;

export default trackSlice.reducer;

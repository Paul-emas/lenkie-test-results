import ApiRequest from '@/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchMarshmelloTracks = createAsyncThunk('marshmello', async thunkApi => {
  const response = await ApiRequest.get('/artist/7890702/top?limit=50')({});
  return response.data.data;
});

const fetchJonBellionTracks = createAsyncThunk('bellion', async thunkApi => {
  const response = await ApiRequest.get('/artist/5340439/top?limit=50')({});
  return response.data.data;
});

const fetchRbTracks = createAsyncThunk('r&b', async () => {
  const response = await ApiRequest.get('/playlist/1036183001/tracks')({});
  return response.data.data;
});

const fetchEminemTracks = createAsyncThunk('eminem', async () => {
  const response = await ApiRequest.get('/search?q=eminem')({});
  return response.data.data;
});

const fetchTrendingPlaylist = createAsyncThunk('tracks', async () => {
  const response = await ApiRequest.get('/playlist/6237312204')({});
  return response.data;
});

const fetchFeaturedAlbums = createAsyncThunk('album', async () => {
  const response = await ApiRequest.get('/playlist/9817140982')({});
  return response.data;
});

const fetchPopularPlaylistArtists = createAsyncThunk('popular', async () => {
  const response = await ApiRequest.get('/search?q=trap')({});
  return response.data.data;
});

export {
  fetchFeaturedAlbums,
  fetchEminemTracks,
  fetchMarshmelloTracks,
  fetchPopularPlaylistArtists,
  fetchRbTracks,
  fetchTrendingPlaylist,
  fetchJonBellionTracks
};

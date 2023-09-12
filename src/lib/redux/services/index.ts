import ApiRequest from '@/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchMarshmelloTracks = createAsyncThunk('marshmello', async thunkApi => {
  const response = await ApiRequest.get('/artist/7890702/top?limit=50')({});
  return response.data.data;
});

const fetchRbTracks = createAsyncThunk('r&b', async thunkApi => {
  const response = await ApiRequest.get('/artist/535490/top?limit=50')({});
  return response.data.data;
});

const fetchEminemTracks = createAsyncThunk('wrld', async thunkApi => {
  const response = await ApiRequest.get('/search?q=eminem')({});
  return response.data.data;
});

const fetchTrendingPlaylist = createAsyncThunk('tracks', async thunkApi => {
  const response = await ApiRequest.get('/playlist/6237312204?limit=16')({});
  return response.data;
});

const fetchPopularPlaylistArtists = createAsyncThunk('popular', async thunkApi => {
  const response = await ApiRequest.get('/search?q=trap')({});
  return response.data.data;
});

const fetchFeaturedAlbums = createAsyncThunk('album', async thunkApi => {
  const response = await ApiRequest.get('/album/430179317?limit=6')({});
  return response.data;
});

export {
  fetchFeaturedAlbums,
  fetchEminemTracks,
  fetchMarshmelloTracks,
  fetchPopularPlaylistArtists,
  fetchRbTracks,
  fetchTrendingPlaylist
};

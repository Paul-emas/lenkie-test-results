import { PlaylistItemType } from '@/types/shared';
import { createSlice } from '@reduxjs/toolkit';

type initialStateTypes = {
  isPlaying: boolean;
  currentTrack: PlaylistItemType | null;
  playerTracks: PlaylistItemType[] | [];
};

const initialState: initialStateTypes = {
  isPlaying: false,
  playerTracks: [],
  currentTrack: null
} as any;

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    handleIsPlaying: (state, action) => void (state.isPlaying = action.payload),
    handleCurrentTrack: (state, action) => void (state.currentTrack = action.payload),
    handleAddTracks: (state, action) => void (state.playerTracks = [...state.playerTracks, ...action.payload])
  }
});

export const { handleIsPlaying, handleCurrentTrack, handleAddTracks } = playerSlice.actions;

export default playerSlice.reducer;

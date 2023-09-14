import { PlaylistItemType } from '@/types/shared';
import { createSlice } from '@reduxjs/toolkit';

type initialStateTypes = {
  isPlaying: boolean;
  openSearch: boolean;
  openSidebar: boolean;
  currentTrack: PlaylistItemType | null;
  playerTracks: PlaylistItemType[] | [];
};

const initialState: initialStateTypes = {
  isPlaying: false,
  openSearch: false,
  openSidebar: false,
  playerTracks: [],
  currentTrack: null
} as any;

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    handleOpenSearch: (state, action) => void (state.openSearch = action.payload),
    handleOpenSidebar: (state, action) => void (state.openSidebar = action.payload),
    handleIsPlaying: (state, action) => void (state.isPlaying = action.payload),
    handleCurrentTrack: (state, action) => void (state.currentTrack = action.payload),
    handleAddTracks: (state, action) => void (state.playerTracks = [...state.playerTracks, ...action.payload])
  }
});

export const { handleIsPlaying, handleCurrentTrack, handleOpenSearch, handleOpenSidebar, handleAddTracks } =
  playerSlice.actions;

export default playerSlice.reducer;

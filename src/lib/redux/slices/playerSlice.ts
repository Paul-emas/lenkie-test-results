import { PlaylistItemType } from '@/types/shared';
import { createSlice } from '@reduxjs/toolkit';

type initialStateTypes = {
  isPlaying: boolean;
  openSearch: boolean;
  openSidebar: boolean;
  muteVolume: boolean;
  isLoadingMetadata: boolean;
  currentTime: number;
  timeProgress: number;
  volume: number;
  duration: number;
  repeatTrack: boolean;
  currentTrack: PlaylistItemType | null;
  playerTracks: PlaylistItemType[] | [];
};

const initialState: initialStateTypes = {
  isPlaying: false,
  openSearch: false,
  openSidebar: false,
  muteVolume: false,
  isLoadingMetadata: true,
  currentTime: 0,
  timeProgress: 0,
  duration: 0,
  volume: 100,
  playerTracks: [],
  repeatTrack: false,
  currentTrack: null
} as any;

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    handleRepeatTrack: (state, action) => void (state.repeatTrack = action.payload),
    handleIsLoadingMetadata: (state, action) => void (state.isLoadingMetadata = action.payload),
    handleMuteVolume: (state, action) => void (state.muteVolume = action.payload),
    handleVolume: (state, action) => void (state.volume = action.payload),
    handleCurrentTime: (state, action) => void (state.currentTime = action.payload),
    handleTimeProgress: (state, action) => void (state.timeProgress = action.payload),
    handleDuration: (state, action) => void (state.duration = action.payload),
    handleOpenSearch: (state, action) => void (state.openSearch = action.payload),
    handleOpenSidebar: (state, action) => void (state.openSidebar = action.payload),
    handleIsPlaying: (state, action) => void (state.isPlaying = action.payload),
    handleCurrentTrack: (state, action) => void (state.currentTrack = action.payload),
    handleAddTracks: (state, action) => void (state.playerTracks = action.payload)
  }
});

export const {
  handleRepeatTrack,
  handleIsPlaying,
  handleCurrentTime,
  handleTimeProgress,
  handleDuration,
  handleCurrentTrack,
  handleOpenSearch,
  handleOpenSidebar,
  handleAddTracks,
  handleVolume,
  handleMuteVolume,
  handleIsLoadingMetadata
} = playerSlice.actions;

export default playerSlice.reducer;

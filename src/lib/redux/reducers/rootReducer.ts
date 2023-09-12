import { combineReducers } from '@reduxjs/toolkit';
import trackReducer from '../slices/trackSlice';
import playerSlice from '../slices/playerSlice';

export const rootReducer = combineReducers({
  track: trackReducer,
  player: playerSlice
});

export type RootState = ReturnType<typeof rootReducer>;

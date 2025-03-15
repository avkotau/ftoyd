import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './matchesSlice';

export const store = configureStore({
  reducer: {
    matches: matchesReducer
  }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

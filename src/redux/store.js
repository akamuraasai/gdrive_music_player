import { configureStore } from '@reduxjs/toolkit';

import { gdriveCoreApi } from './services/gdriveCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [gdriveCoreApi.reducerPath]: gdriveCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gdriveCoreApi.middleware),
});

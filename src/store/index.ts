import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './features/uiSlice';
import reservationFormReducer from './features/reservationFormSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    reservationForm: reservationFormReducer,
  },
});

// Type definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

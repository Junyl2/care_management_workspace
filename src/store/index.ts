import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './features/uiSlice';
import reservationFormReducer from './features/reservationFormSlice';
import costReducer from './features/costSlice';
import reservationDataReducer from './features/reservationDataSlice';
import checkDetailsReducer from './features/checkReservationDetails';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    reservationForm: reservationFormReducer,
    cost: costReducer,
    reservation: reservationDataReducer,
    checkDetails: checkDetailsReducer,
  },
});

// Type definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

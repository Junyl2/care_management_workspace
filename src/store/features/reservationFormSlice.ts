import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ReservationFormState {
  guardianName: string;
  guardianPhone: string;
  userName: string;
  userPhone: string;
  serviceDate: string; // Format: 'YYYY-MM-DD'
  serviceTime: string; // Format: '08:00 ~ 11:00, 3시간'
  address: string;
  addressDetail: string;
}

const initialState: ReservationFormState = {
  guardianName: '',
  guardianPhone: '',
  userName: '',
  userPhone: '',
  serviceDate: '',
  serviceTime: '',
  address: '',
  addressDetail: '',
};

export const reservationFormSlice = createSlice({
  name: 'reservationForm',
  initialState,
  reducers: {
    setField: (
      state,
      action: PayloadAction<{
        field: keyof ReservationFormState;
        value: string;
      }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    setForm: (state, action: PayloadAction<ReservationFormState>) => {
      return { ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { setField, setForm, resetForm } = reservationFormSlice.actions;
export default reservationFormSlice.reducer;

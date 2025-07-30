import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ReservationFormState {
  guardianName: string;
  guardianPhone: string;
  userName: string;
  userPhone: string;
  serviceDate: string;
  serviceTime: string;
  address: string;
  addressDetail: string;
  promotionDiscount: string;

  hospitalName: string;
  department: string;
  appointmentDate: string;
  appointmentTime: string;
  severity: string;
  additionalRequests: string[];
  etc: string;
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
  promotionDiscount: '',

  hospitalName: '',
  department: '',
  appointmentDate: '',
  appointmentTime: '',
  severity: '',
  additionalRequests: [],
  etc: '',
};

export const reservationFormSlice = createSlice({
  name: 'reservationForm',
  initialState,
  reducers: {
    setField: <K extends keyof ReservationFormState>(
      state: ReservationFormState,
      action: PayloadAction<{ field: K; value: ReservationFormState[K] }>
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

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface ReservationData {
  service: string;
  date: string;
  time: string;
  amount: number;
  discountLabel?: string;
  discountAmount?: number;
  total: number;
}

// structure for the slice state
interface ReservationState {
  reservation: ReservationData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ReservationState = {
  reservation: null,
  status: 'idle',
  error: null,
};

// Async thunk to fetch reservation data from the API
export const fetchReservationData = createAsyncThunk<ReservationData, void>(
  'reservation/fetchReservationData',
  async () => {
    // Mock the API response with dummy data
    const dummyData: ReservationData = {
      service: 'Hospital Escort Service',
      date: '2025-08-10',
      time: '14:00 - 16:00',
      amount: 20000,
      discountLabel: '5% off for early booking',
      discountAmount: 1000,
      total: 19000,
    };

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return dummyData;
  }
);

// Create the slice with actions and reducers
const reservationDataSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservationData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchReservationData.fulfilled,
        (state, action: PayloadAction<ReservationData>) => {
          state.status = 'succeeded';
          state.reservation = action.payload;
        }
      )
      .addCase(fetchReservationData.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          action.error.message || 'Failed to fetch reservation data';
      });
  },
});

export default reservationDataSlice.reducer;

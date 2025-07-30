import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface CostData {
  baseRate: number;
  nightSurcharge: number;
  lateNightSurcharge: number;
  severitySurcharge: number;
  hourlyRates: Record<string, number>;
}

export const fetchCostData = createAsyncThunk<CostData, void>(
  'cost/fetchCostData',
  async () => {
    return new Promise<CostData>((resolve) => {
      setTimeout(() => {
        resolve({
          baseRate: 20000,
          nightSurcharge: 0.2,
          lateNightSurcharge: 0.3,
          severitySurcharge: 10000,
          hourlyRates: {
            '18:00-20:00': 24000,
            '22:00-06:00': 26000,
          },
        });
      }, 1000);
    });
  }
);

interface CostState {
  baseRate: number;
  nightSurcharge: number;
  lateNightSurcharge: number;
  severitySurcharge: number;
  hourlyRates: Record<string, number>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CostState = {
  baseRate: 20000,
  nightSurcharge: 0.2,
  lateNightSurcharge: 0.3,
  severitySurcharge: 10000,
  hourlyRates: {
    '18:00-20:00': 24000,
    '22:00-06:00': 26000,
  },
  status: 'idle',
  error: null,
};

const costSlice = createSlice({
  name: 'cost',
  initialState,
  reducers: {
    setBaseRate: (state, action: PayloadAction<number>) => {
      state.baseRate = action.payload;
    },
    setNightSurcharge: (state, action: PayloadAction<number>) => {
      state.nightSurcharge = action.payload;
    },
    setLateNightSurcharge: (state, action: PayloadAction<number>) => {
      state.lateNightSurcharge = action.payload;
    },
    setSeveritySurcharge: (state, action: PayloadAction<number>) => {
      state.severitySurcharge = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCostData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchCostData.fulfilled,
        (state, action: PayloadAction<CostData>) => {
          state.status = 'succeeded';
          state.baseRate = action.payload.baseRate;
          state.nightSurcharge = action.payload.nightSurcharge;
          state.lateNightSurcharge = action.payload.lateNightSurcharge;
          state.severitySurcharge = action.payload.severitySurcharge;
          state.hourlyRates = action.payload.hourlyRates;
        }
      )
      .addCase(fetchCostData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cost data';
      });
  },
});

export const {
  setBaseRate,
  setNightSurcharge,
  setLateNightSurcharge,
  setSeveritySurcharge,
} = costSlice.actions;
export default costSlice.reducer;

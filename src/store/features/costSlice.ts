import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface CostData {
  baseRate: number;
  nightSurcharge: number;
  lateNightSurcharge: number;
  severitySurcharge: number;
  hourlyRates: Record<string, number>;
  surchargeStatus?: {
    night: string;
    lateNight: string;
    severity: string;
  };
}

export const fetchCostData = createAsyncThunk<CostData, void>(
  'cost/fetchCostData',
  async () => {
    return new Promise<CostData>((resolve) => {
      setTimeout(() => {
        resolve({
          baseRate: 20000,
          nightSurcharge: 0.3,
          lateNightSurcharge: 0.3,
          severitySurcharge: 5000,
          hourlyRates: {
            '18:00-22:00': 26000,
            '06:00-08:00': 26000,
          },
          surchargeStatus: {
            night: '적용',
            lateNight: '적용',
            severity: '적용 가능 (상황 따라)',
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
  surchargeStatus: {
    night: string;
    lateNight: string;
    severity: string;
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CostState = {
  baseRate: 20000,
  nightSurcharge: 0.3,
  lateNightSurcharge: 0.3,
  severitySurcharge: 5000,
  hourlyRates: {
    '18:00-22:00': 26000,
    '06:00-08:00': 26000,
  },
  surchargeStatus: {
    night: '',
    lateNight: '',
    severity: '',
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
          state.surchargeStatus = action.payload.surchargeStatus || {
            night: '',
            lateNight: '',
            severity: '',
          };
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

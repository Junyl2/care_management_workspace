import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
/* import axios from 'axios';
 */
interface CheckDetails {
  service: string;
  serviceDate: string;
  serviceTime: string;
  userName: string;
  userContact: string;
  guardianName: string;
  guardianContact: string;
  address: string;
  serviceRequest: string;
  severity: string;
  additionalRequests: string[];
  amount: number;
  discountLabel?: string;
  discountAmount?: number;
  total: number;
  representativePhone: string;
  consultationPhone: string;
}

// structure for the slice state
interface CheckDetailsState {
  checkDetails: CheckDetails | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state for the slice
const initialState: CheckDetailsState = {
  checkDetails: null,
  status: 'idle',
  error: null,
};

// Dummy async thunk to simulate fetching check details data (replace with real API in the future)
export const fetchCheckDetails = createAsyncThunk<CheckDetails, void>(
  'checkDetails/fetchCheckDetails',
  async () => {
    // Simulate a delay with dummy data
    return new Promise<CheckDetails>((resolve) => {
      setTimeout(() => {
        resolve({
          service: '병원동행',
          serviceDate: '2025년 7월 12일',
          serviceTime: '11:00~13:30, 2시간 30분',
          userName: '홍길동',
          userContact: '010-0000-0000',
          guardianName: '홍길동',
          guardianContact: '010-0000-0000',
          address: '서울특별시 동대문구 망우로16길 20, 201호',
          serviceRequest: '병원이름, 진료과, 2025.00.00 15:00',
          severity: '중증 해당, 의료기기 필수, 직접 입력한 내용',
          additionalRequests: [
            '기저귀 착용',
            '기타 추가 요청 사항',
            '기타 추가 요청 사항 입력이 들어갑니다.',
          ],
          amount: 50000,
          discountLabel: '리뷰이벤트 5%할인',
          discountAmount: 5000,
          total: 45000,
          representativePhone: '1588-2905',
          consultationPhone: '010-7301-8284',
        });
      }, 1000); // Simulating an API response delay
    });
  }
);

// Create the slice with actions and reducers
const checkDetailsSlice = createSlice({
  name: 'checkDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCheckDetails.pending, (state) => {
        state.status = 'loading'; // Set loading state
      })
      .addCase(
        fetchCheckDetails.fulfilled,
        (state, action: PayloadAction<CheckDetails>) => {
          state.status = 'succeeded'; // Set succeeded state
          state.checkDetails = action.payload; // Store the fetched check details data in the state
        }
      )
      .addCase(fetchCheckDetails.rejected, (state, action) => {
        state.status = 'failed'; // Set failed state if there's an error
        state.error = action.error.message || 'Failed to fetch check details'; // Set the error message
      });
  },
});

export default checkDetailsSlice.reducer;

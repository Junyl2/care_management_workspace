import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  mobileOpen: boolean;
  servicesOpen: boolean;
  isMobileScreen: boolean;
  showCostDetails: boolean;
  showReservationDrawer: boolean;
}

const initialState: UIState = {
  mobileOpen: false,
  servicesOpen: false,
  isMobileScreen: false,
  showCostDetails: false,
  showReservationDrawer: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobile(state) {
      state.mobileOpen = !state.mobileOpen;
      state.servicesOpen = false;
    },
    toggleServices(state) {
      state.servicesOpen = !state.servicesOpen;
    },
    openServices(state) {
      state.servicesOpen = true;
    },
    closeServices(state) {
      state.servicesOpen = false;
    },
    closePanels(state) {
      state.mobileOpen = false;
      state.servicesOpen = false;
    },
    setIsMobileScreen(state, action: PayloadAction<boolean>) {
      state.isMobileScreen = action.payload;
    },
    toggleCostBreakdown: (state) => {
      state.showCostDetails = !state.showCostDetails;
    },
    toggleReservationDrawer(state) {
      state.showReservationDrawer = !state.showReservationDrawer;
    },
  },
});

export const {
  toggleMobile,
  toggleServices,
  openServices,
  closeServices,
  closePanels,
  setIsMobileScreen,
  toggleCostBreakdown,
  toggleReservationDrawer,
} = uiSlice.actions;

export default uiSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  mobileOpen: boolean;
  servicesOpen: boolean;
  isMobileScreen: boolean;
}

const initialState: UIState = {
  mobileOpen: false,
  servicesOpen: false,
  isMobileScreen: false,
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
  },
});

export const {
  toggleMobile,
  toggleServices,
  openServices,
  closeServices,
  closePanels,
  setIsMobileScreen,
} = uiSlice.actions;

export default uiSlice.reducer;

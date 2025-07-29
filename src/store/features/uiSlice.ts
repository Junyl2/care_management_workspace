import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  mobileOpen: boolean;
  servicesOpen: boolean;
  isMobileScreen: boolean;
  helpModalOpen: boolean;
}

const initialState: UIState = {
  mobileOpen: false,
  servicesOpen: false,
  isMobileScreen: false,
  helpModalOpen: false,
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
      state.helpModalOpen = false;
    },
    setIsMobileScreen(state, action: PayloadAction<boolean>) {
      state.isMobileScreen = action.payload;
    },
    openHelpModal(state) {
      state.helpModalOpen = true;
    },
    closeHelpModal(state) {
      state.helpModalOpen = false;
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
  openHelpModal,
  closeHelpModal,

} = uiSlice.actions;

export default uiSlice.reducer;

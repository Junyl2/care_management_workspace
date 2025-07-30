import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ReservationFormState {
  serviceName: string;
  subscriptionPlan: string;

  // Guardian and user info
  guardianName: string;
  guardianPhone: string;
  userName: string;
  userPhone: string;

  // Service details
  serviceDate: string;
  serviceTime: string;
  address: string;
  addressDetail: string;
  promotionDiscount: string;

  // Hospital accompaniment service fields
  hospitalName: string;
  department: string;
  appointmentDate: string;
  appointmentTime: string;

  // Common severity field across services
  severity: string;
  severityEtc: string;

  // Severity-related conditions (for services that require severity)
  wheelchairOrBed: boolean;
  cannotMoveAlone: boolean;
  cognitiveDecline: boolean;
  requiresMedicalDevice: boolean;
  complexHospitalLayout: boolean;

  // Service-specific request checkboxes (Meal, Bath, Exercise, Housework, Hospital Accompaniment)
  mealRequests: string[];
  bathRequests: string[];
  exerciseRequests: string[];
  houseworkRequests: string[];
  hospitalAccompanimentRequests: string[];

  // Additional notes for each service (free text)
  mealEtc: string;
  bathEtc: string;
  exerciseEtc: string;
  houseworkEtc: string;
  hospitalAccompanimentEtc: string;

  // Hospital-specific severity options (for "Hospital Accompaniment")
  hospitalSeverityOption: string; // 'Severe' or 'None'
  hospitalSeverityConditions: string[];
  hospitalSeverityEtc: string;
  hospitalAdditionalConditions: string[];
  hospitalSeverityManualEtc: string;
}

const initialState: ReservationFormState = {
  serviceName: '',
  subscriptionPlan: '',

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
  severityEtc: '',

  wheelchairOrBed: false,
  cannotMoveAlone: false,
  cognitiveDecline: false,
  requiresMedicalDevice: false,
  complexHospitalLayout: false,

  mealRequests: [],
  bathRequests: [],
  exerciseRequests: [],
  houseworkRequests: [],
  hospitalAccompanimentRequests: [],

  mealEtc: '',
  bathEtc: '',
  exerciseEtc: '',
  houseworkEtc: '',
  hospitalAccompanimentEtc: '',

  hospitalSeverityOption: '', // 'Severe' or 'None'
  hospitalSeverityConditions: [],
  hospitalSeverityEtc: '',
  hospitalAdditionalConditions: [],
  hospitalSeverityManualEtc: '',
};

// Creating slice
export const reservationFormSlice = createSlice({
  name: 'reservationForm',
  initialState,
  reducers: {
    // to set a specific field value in the form
    setField: <K extends keyof ReservationFormState>(
      state: ReservationFormState,
      action: PayloadAction<{ field: K; value: ReservationFormState[K] }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },

    // to set the entire form (useful for loading form data from an external source)
    setForm: (state, action: PayloadAction<ReservationFormState>) => {
      return { ...action.payload };
    },

    // Reset form fields to their initial state
    resetForm: () => initialState,

    // Action to handle updates for checkbox fields
    updateCheckboxField: (
      state,
      action: PayloadAction<{
        field: keyof ReservationFormState;
        value: string[]; // Accept string[] to handle arrays of strings
      }>
    ) => {
      const { field, value } = action.payload;
      // Update the state with the new value
      if (
        field === 'hospitalAccompanimentRequests' ||
        field === 'hospitalSeverityConditions'
      ) {
        state[field] = value;
      }
    },

    // Action to handle severity selection and conditions updates
    updateSeverityOption: (
      state,
      action: PayloadAction<{ severity: string }>
    ) => {
      const { severity } = action.payload;
      state.hospitalSeverityOption = severity;

      // Reset conditions when switching between severity options
      if (severity === '중증 해당') {
        state.hospitalSeverityConditions = [];
      } else if (severity === '해당 없음') {
        // Clear the conditions
        state.hospitalSeverityConditions = [];
      }
    },
  },
});

export const {
  setField,
  setForm,
  resetForm,
  updateCheckboxField,
  updateSeverityOption,
} = reservationFormSlice.actions;
export default reservationFormSlice.reducer;

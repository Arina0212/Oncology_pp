import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PatiensProcess } from '../../types/state';
import { fetchAnalysAction, fetchAnalysisDateAction, fetchFullPatientInfoAction, fetchGraficAction, fetchPatiensInfoAction} from '../api-actions';

const initialState: PatiensProcess = {
    patients: [],
    patient: undefined,
    isPatientLoading: false,
    analysis: undefined,
    grafic: undefined
};

export const patientsProcess = createSlice({
  name: NameSpace.Patiens,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPatiensInfoAction.fulfilled, (state, action) => {
        state.patients = action.payload;
        state.isPatientLoading = false;
      })
      .addCase(fetchFullPatientInfoAction.pending, (state) => {
        state.isPatientLoading = true;
      })
      .addCase(fetchFullPatientInfoAction.fulfilled, (state, action) => {
        state.patient = action.payload;
        state.isPatientLoading = false;
      })
      .addCase(fetchAnalysisDateAction.fulfilled, (state, action) => {
        state.analysis = action.payload;
        //state.isPatientLoading = false;
      })
      .addCase(fetchAnalysAction.fulfilled, (state, action) => {
        state.analys = action.payload;
        //state.isPatientLoading = false;
      })
      .addCase(fetchGraficAction.fulfilled, (state, action) => {
        state.grafic = action.payload;
        //state.isPatientLoading = false;
      })
      
      // .addCase(fetchAnalysisDateAction.pending, (state) => {
      //   state.isAnalysesLoading = true;
      // })
  }
});

import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PatiensProcess } from '../../types/state';
import { fetchAnalysAction, fetchAnalysComparisonAction, fetchAnalysisDateAction, fetchConclusionAction, fetchFullPatientInfoAction, fetchGraficAction, fetchPatiensInfoAction, fetchPatientsRigthAction} from '../api-actions';

const initialState: PatiensProcess = {
  patients: [],
  patient: undefined,
  isPatientLoading: false,
  analysis: undefined,
  analys:   {name: '',
  analysis_date: '',
  analysis: [
      {
          name: '',
          value: -100,
          interval_min: -100,
          interval_max: -100,
          unit: 100,
      },
      {
        name: '',
        value: -100,
        interval_min: -100,
        interval_max: -100,
        unit: 100,
      },
      {
        name: '',
        value: -100,
        interval_min: -100,
        interval_max: -100,
        unit: 100,
      },
      {
        name: '',
        value: -100,
        interval_min: -100,
        interval_max: -100,
        unit: 100,
      },
      {
        name: '',
        value: -100,
        interval_min: -100,
        interval_max: -100,
        unit: 100,
      },
      {
        name: '',
        value: -100,
        interval_min: -100,
        interval_max: -100,
        unit: 100,
      },
      {
        name: '',
        value: -100,
        interval_min: -100,
        interval_max: -100,
        unit: 100,
      }
  ],
},
  grafic: undefined,
  comparison: undefined,
  NewAnalysis: undefined,
  operationData: undefined,
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
        state.isPatientLoading = false;
      })
      .addCase(fetchAnalysisDateAction.pending, (state) => {
        state.isPatientLoading = true;
      })
      .addCase(fetchAnalysAction.fulfilled, (state, action) => {
        state.analys = action.payload;
        state.isPatientLoading = false;
      })
      .addCase(fetchAnalysAction.rejected, (state) => {
        state.isPatientLoading = true;
      })
      .addCase(fetchGraficAction.fulfilled, (state, action) => {
        state.grafic = action.payload;
        //state.isPatientLoading = false;
      })
      .addCase(fetchAnalysComparisonAction.fulfilled, (state, action) => {
        state.comparison = action.payload;
        //state.isPatientLoading = false;
      })
      .addCase(fetchConclusionAction.fulfilled, (state, action) => {
        state.conclusion = action.payload;
        //state.isPatientLoading = false;
      })
      .addCase(fetchPatientsRigthAction.fulfilled, (state, action) => {
        state.operationData = action.payload;
        state.isPatientLoading = false;
      })
      .addCase(fetchPatientsRigthAction.pending, (state) => {
        state.isPatientLoading = true;
      });
    // .addCase(fetchAnalysisDateAction.pending, (state) => {
    //   state.isAnalysesLoading = true;
    // })
  }
});

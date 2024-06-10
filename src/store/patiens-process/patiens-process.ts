import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PatiensProcess } from '../../types/state';
import { fetchAnalysAction, fetchAnalysComparisonAction, fetchAnalysisDateAction, fetchConclusionAction, fetchCurrentPatientAction, fetchFullPatientInfoAction, fetchGraficAction, fetchPatiensInfoAction, fetchPatientsRigthAction} from '../api-actions';

const initialState: PatiensProcess = {
  patients: [],
  searchPatient: [],
  patient: undefined,
  isPatientLoading: false,
  isOperationLoading: false,
  isAnalysisLoading: false,
  analysis: undefined,
  //analys:undefined,
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
  error: '',
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
        state.isAnalysisLoading = false;
      })
      .addCase(fetchAnalysisDateAction.pending, (state) => {
        state.isAnalysisLoading = true;
      })
      .addCase(fetchAnalysAction.fulfilled, (state, action) => {
        state.analys = action.payload;
        state.isAnalysisLoading = false;
      })
      .addCase(fetchCurrentPatientAction.fulfilled, (state, action) => {
        state.searchPatient = action.payload;
      })
      .addCase(fetchAnalysAction.rejected, (state) => {
        state.isAnalysisLoading = true;
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
        state.isOperationLoading = false;
      })
      .addCase(fetchPatientsRigthAction.pending, (state) => {
        state.isOperationLoading = true;
      });
      // .addCase(fetchPatientsRigthAction.rejected, (state) => {
      //   state.isOperationLoading = true;
      // });
    // .addCase(fetchAnalysisDateAction.pending, (state) => {
    //   state.isAnalysesLoading = true;
    // })
  }
});

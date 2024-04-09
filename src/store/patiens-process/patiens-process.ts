import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PatiensProcess } from '../../types/state';
import { fetchFullPatientInfoAction, fetchPatiensInfoAction} from '../api-actions';

const initialState: PatiensProcess = {
    patients: [],
    patient: undefined,
    isPatientLoading: false,
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
  }
});

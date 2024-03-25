import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SubjectsProcess } from '../../types/state';
import { fetchSubjectsAction } from '../api-actions';

const initialState: SubjectsProcess = {
    subject_name: [],
    subject_text: '',
};

export const subjectsProcess = createSlice({
  name: NameSpace.Subjects,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSubjectsAction.fulfilled, (state, action) => {
        state.subject_name = action.payload;
      })
  }
});

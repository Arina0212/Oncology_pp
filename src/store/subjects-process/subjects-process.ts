import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SubjectsProcess } from '../../types/state';
import { fetchSubjectTextAction, fetchSubjectsAction } from '../api-actions';

const initialState: SubjectsProcess = {
  subjectName: [],
  currentSubject: undefined
};

export const subjectsProcess = createSlice({
  name: NameSpace.Subjects,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSubjectsAction.fulfilled, (state, action) => {
        state.subjectName = action.payload;
      })
      .addCase(fetchSubjectTextAction.fulfilled, (state, action) => {
        state.currentSubject = action.payload;
      });
  }
});

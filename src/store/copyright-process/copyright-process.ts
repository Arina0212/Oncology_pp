import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CopyrightProcess } from '../../types/state';
import { fetchCopyrightAction } from '../api-actions';

const initialState: CopyrightProcess = {
  copyrightText: ' ',
};

export const copyrightProcess = createSlice({
  name: NameSpace.Copyright,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCopyrightAction.fulfilled, (state, action) => {
        state.copyrightText = action.payload.copyright_text;
      });
  }
});


import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { copyrightProcess } from './copyright-process/copyright-process';
import { subjectsProcess } from './subjects-process/subjects-process';
import { patientsProcess } from './patiens-process/patiens-process';


export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Copyright]: copyrightProcess.reducer,
  [NameSpace.Subjects]: subjectsProcess.reducer,
  [NameSpace.Patiens]: patientsProcess.reducer,

});

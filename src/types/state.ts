import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { SubjectData } from './subject-data';
import { SubjectsData } from './subjects-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  error: string;
  email: string;
};

export type CopyrightProcess = {
  copyright_text: string;
};

export type SubjectsProcess = {
  subject_name: SubjectsData[];
  current_subject?: SubjectData;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

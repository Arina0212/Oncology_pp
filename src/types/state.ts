import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { SubjectData } from './subject-data';
import { SubjectsData } from './subjects-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  error: string;
  email: string;
};

export type PatiensProcess = {
  first_name: string;
  last_name: string;
  patronymic: string;
  birth_date: string;
  diagnosis: string;
  region: string;
  diagnosis_comment: string;
  operation_comment: string;
  chemoterapy_comment: string;
};

export type CopyrightProcess = {
  copyright_text: string;
};

export type ActiveSubjectProcess = {
  activeSubject: string;
}

export type SubjectsProcess = {
  subject_name: SubjectsData[];
  current_subject?: SubjectData;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

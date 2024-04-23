import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { AnalysData } from './analys-data';
import { AnalysisDateData } from './analysis-date';
import { GraficData, Grafics } from './grafic';
import { PatienInfoData } from './patient-info';
import { SubjectData } from './subject-data';
import { SubjectsData } from './subjects-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  error: string;
  email: string;
};

export type PatiensProcess = {
  patients: PatienInfoData[];
  patient?: PatienInfoData;
  isPatientLoading: boolean;
  analysis?: AnalysisDateData;
  analys?: AnalysData;
  grafic?: Grafics;
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

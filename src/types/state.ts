import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { AnalysComparisonData } from './analys-comparation';
import { AnalysData } from './analys-data';
import { AnalysisDateData } from './analysis-date';
import { Conclusion } from './conclusion';
import { Grafics } from './grafic';
import { PostAnalyses } from './patient-analyses-post';
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
  comparison?: AnalysComparisonData;
  NewAnalysis?: PostAnalyses;
  conclusion?: Conclusion;
};

export type CopyrightProcess = {
  copyrightText: string;
};

export type ActiveSubjectProcess = {
  activeSubject: string;
}

export type SubjectsProcess = {
  subjectName: SubjectsData[];
  currentSubject?: SubjectData;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

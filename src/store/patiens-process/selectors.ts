import { NameSpace } from '../../const';
import { AnalysComparisonData } from '../../types/analys-comparation';
import { AnalysData } from '../../types/analys-data';
import { AnalysisDateData } from '../../types/analysis-date';
import { Grafics } from '../../types/grafic';
import { PatienInfoData } from '../../types/patient-info';
import { State } from '../../types/state';

export const getPatiens = (state: Pick<State, NameSpace.Patiens>): PatienInfoData[] => state[NameSpace.Patiens].patients;
export const getCurrentPatient = (state: Pick<State, NameSpace.Patiens>): PatienInfoData | undefined => state[NameSpace.Patiens].patient;
export const getPatientDataLoading = (state: Pick<State, NameSpace.Patiens>): boolean => state[NameSpace.Patiens].isPatientLoading;
export const getPatiensAnalyses = (state: Pick<State, NameSpace.Patiens>): AnalysisDateData | undefined => state[NameSpace.Patiens].analysis;
export const getPatientAnalys = (state: Pick<State, NameSpace.Patiens>): AnalysData | undefined => state[NameSpace.Patiens].analys;
export const getGrafic = (state: Pick<State, NameSpace.Patiens>): Grafics | undefined => state[NameSpace.Patiens].grafic;
export const getComparison = (state: Pick<State, NameSpace.Patiens>): AnalysComparisonData | undefined => state[NameSpace.Patiens].comparison;


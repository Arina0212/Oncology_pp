import { NameSpace } from '../../const';
import { AnalysComparisonData } from '../../types/analys-comparation';
import { AnalysData } from '../../types/analys-data';
import { AnalysisDateData } from '../../types/analysis-date';
import { Conclusion } from '../../types/conclusion';
import { Grafics } from '../../types/grafic';
import { PatienInfoData, PatienInfoDataError, PatienInfoRightBlockData } from '../../types/patient-info';
import { State } from '../../types/state';

export const getPatiens = (state: Pick<State, NameSpace.Patiens>): PatienInfoDataError[] => state[NameSpace.Patiens].patients;
export const getCurrentPatient = (state: Pick<State, NameSpace.Patiens>): PatienInfoData | undefined => state[NameSpace.Patiens].patient;
export const getSearchPatient = (state: Pick<State, NameSpace.Patiens>): PatienInfoDataError[]=> state[NameSpace.Patiens].searchPatient;
export const getPatientDataLoading = (state: Pick<State, NameSpace.Patiens>): boolean => state[NameSpace.Patiens].isPatientLoading;
export const getOperationDataLoading = (state: Pick<State, NameSpace.Patiens>): boolean => state[NameSpace.Patiens].isOperationLoading;
export const getAnalysesDataLoading = (state: Pick<State, NameSpace.Patiens>): boolean => state[NameSpace.Patiens].isAnalysisLoading;
export const getPatiensAnalyses = (state: Pick<State, NameSpace.Patiens>): AnalysisDateData | undefined => state[NameSpace.Patiens].analysis;
export const getPatientAnalys = (state: Pick<State, NameSpace.Patiens>): AnalysData => state[NameSpace.Patiens].analys;
//xport const getPatientAnalys = (state: Pick<State, NameSpace.Patiens>): AnalysData | undefined=> state[NameSpace.Patiens].analys;

export const getGrafic = (state: Pick<State, NameSpace.Patiens>): Grafics | undefined => state[NameSpace.Patiens].grafic;
export const getComparison = (state: Pick<State, NameSpace.Patiens>): AnalysComparisonData | undefined => state[NameSpace.Patiens].comparison;
export const getConclusion = (state: Pick<State, NameSpace.Patiens>): Conclusion | undefined => state[NameSpace.Patiens].conclusion;
export const getOperationData = (state: Pick<State, NameSpace.Patiens>): PatienInfoRightBlockData | undefined => state[NameSpace.Patiens].operationData;
export const getError = (state: Pick<State, NameSpace.Patiens>): string => state[NameSpace.Patiens].error;


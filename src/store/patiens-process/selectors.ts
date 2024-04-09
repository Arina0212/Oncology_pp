import { NameSpace } from '../../const';
import { PatienInfoData } from '../../types/patient-info';
import { State } from '../../types/state';

export const getPatiens = (state: Pick<State, NameSpace.Patiens>): PatienInfoData[] => state[NameSpace.Patiens].patients;
export const getCurrentPatient = (state: Pick<State, NameSpace.Patiens>): PatienInfoData | undefined => state[NameSpace.Patiens].patient;
export const getPatientDataLoading = (state: Pick<State, NameSpace.Patiens>): boolean => state[NameSpace.Patiens].isPatientLoading;

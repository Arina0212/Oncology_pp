import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { SubjectData } from '../../types/subject-data';

export const getSubjectsName = (state: Pick<State, NameSpace.Subjects>): SubjectData[] => state[NameSpace.Subjects].subject_name;

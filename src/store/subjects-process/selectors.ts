import { NameSpace } from '../../const';
import { ActiveSubjectData } from '../../types/active-subject';
import { State } from '../../types/state';
import { SubjectData } from '../../types/subject-data';
import { SubjectsData } from '../../types/subjects-data';

export const getSubjectsName = (state: Pick<State, NameSpace.Subjects>): SubjectsData[] => state[NameSpace.Subjects].subject_name;
export const getCurrentSubject = (state: Pick<State, NameSpace.Subjects>): SubjectData | undefined => state[NameSpace.Subjects].current_subject;
// export const getActiveSubjectsName = (state: Pick<State, NameSpace.Subjects>): ActiveSubjectData | undefined => state[NameSpace.Subjects].;

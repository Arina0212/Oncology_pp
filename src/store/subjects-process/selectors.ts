import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { SubjectData } from '../../types/subject-data';
import { SubjectsData } from '../../types/subjects-data';

export const getSubjectsName = (state: Pick<State, NameSpace.Subjects>): SubjectsData[] => state[NameSpace.Subjects].subjectName;
export const getCurrentSubject = (state: Pick<State, NameSpace.Subjects>): SubjectData | undefined => state[NameSpace.Subjects].currentSubject;
// export const getActiveSubjectsName = (state: Pick<State, NameSpace.Subjects>): ActiveSubjectData | undefined => state[NameSpace.Subjects].;

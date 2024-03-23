import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCopyright = (state: Pick<State, NameSpace.Copyright>): string => state[NameSpace.Copyright].copyright_text;

import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export default function SignOutButton() {
  const dispatch = useAppDispatch();
  return(
    <Link
      className="header__enter"
      to={AppRoute.Main}
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(logoutAction());
      }}
    >Выйти    </Link>
  );
}

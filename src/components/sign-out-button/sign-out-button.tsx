import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from '../hooks';

export default function SignOutButton() {
  const dispatch = useAppDispatch();
  return(
    <Link
      to={AppRoute.Main}
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(logoutAction());
      }}
      className="header__enter"
    >Выйти</Link>
  );
}

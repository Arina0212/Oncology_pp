import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import SignOutButton from '../sign-out-button/sign-out-button';
import { useAppSelector } from '../hooks';

const getUserBlock = (authorizationStatus: AuthorizationStatus) => {
  if(authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <div className="header__enter">
        <SignOutButton />
      </div>
    );
  } else if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return (
      <Link className="header__enter" to={AppRoute.Login}>Войти</Link>
    );
  }
  return (
    <div className="header__enter">
    </div>
  // <Link className="header__enter" to={AppRoute.Login}>Войти</Link>
  );


};

export default function UserBlock() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <>
      {getUserBlock(authorizationStatus)}
    </>
  );
}

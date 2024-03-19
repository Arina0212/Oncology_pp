import { Link } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { getAuthorizationStatus } from "../../store/user-process/selectors";
import { useAppSelector } from "../login-popup/login-popup";
import SignOutButton from "../sign-out-button/sign-out-button";

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
    }else if(authorizationStatus === AuthorizationStatus.Unknown){
        return (
            //   <div className="header__enter">
            //   </div>
              <Link className="header__enter" to={AppRoute.Login}>Войти</Link>
            );
    }
    
  };
  
  export default function UserBlock() {
    const authorizationStatus = useAppSelector(getAuthorizationStatus);
    return (
      <>
        {getUserBlock(authorizationStatus)}
      </>
    );
  }
  
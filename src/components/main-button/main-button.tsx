import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';

type MainButtonProps = {
  authorizationStatus: AuthorizationStatus;
}

export default function MainButton({authorizationStatus}: MainButtonProps) {
  const navigate = useNavigate();
  console.log(authorizationStatus);
  return(
    <button
      className="main__btn"
      type="button"
      onClick={() => {
        if(authorizationStatus === AuthorizationStatus.Auth) {
          navigate(AppRoute.Search);
        } else {
          navigate(AppRoute.Login);
        }
      }}
    >
      <span>Калькулятор иммунодефицита и регенерации</span>
    </button>
  );
}

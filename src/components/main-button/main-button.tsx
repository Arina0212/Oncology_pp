import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';

type MainButtonProps = {
  authorizationStatus: AuthorizationStatus;
}

export default function ChangeFavoriteFilmButton({authorizationStatus}: MainButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return(
    <button
    className="main__btn"
      type="button"
      onClick={() => {
        if(authorizationStatus === AuthorizationStatus.Auth) {
            navigate(`${AppRoute.Profile}`);
        } else {
          navigate(`${AppRoute.Login}`);
        }
      }}
    >
      <span>Калькулятор иммунодефицита и регенерации</span>
    </button>
  );
}

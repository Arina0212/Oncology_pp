import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import axios, { AxiosInstance } from 'axios';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { SignUpData } from '../types/signup-data';
import { ErrorsData } from '../types/errors-data';
import { DoctorData } from '../types/doctor-data';

type ErrorMessege = {
  error: string;
}

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {login, password});
    saveToken(data.token);
    // const errorMess = await api.bind;
    
  }

);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.post(APIRoute.Logout);
    dropToken();
  },
);

export const SignUpAction = createAsyncThunk<void, SignUpData, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'user/signup',
  async ({ first_name, last_name, patronymic, password, login}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<DoctorData>(APIRoute.SignUp, {first_name, last_name, patronymic, password, login});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);





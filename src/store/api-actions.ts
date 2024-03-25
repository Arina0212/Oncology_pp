import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { SignUpData } from '../types/signup-data';
import { DoctorData } from '../types/doctor-data';
import { CopyrightData } from '../types/copyrigthing-data';
import { SubjectData } from '../types/subject-data';

// export const checkAuthAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'user/checkAuth',
//   async (_arg, {extra: api}) => {
//     await api.get(APIRoute.Login);
//   },
// );

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    console.log(data.error);
    if(data.error === undefined){
      dispatch(redirectToRoute(AppRoute.Main));
    }else{
      
    }
    return data;
  },

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

export const SignUpAction = createAsyncThunk<DoctorData, SignUpData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/signup',
  async ({ first_name, last_name, patronymic, password, email}, {dispatch, extra: api}) => {
    const {data} = await api.post<DoctorData>(APIRoute.SignUp, {first_name, last_name, patronymic, password, email});
    saveToken(data.token);
    console.log(data.email)
    if(data.email === undefined){
      dispatch(redirectToRoute(AppRoute.Main));
    }else{
      
    }
    return data;
  },
);

export const fetchCopyrightAction = createAsyncThunk<CopyrightData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCopyright',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<CopyrightData>(APIRoute.Copyright);
    return data;
  },
);

export const fetchSubjectsAction = createAsyncThunk<SubjectData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSubjects',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<SubjectData[]>(APIRoute.Usage);
    return data;
  },
);




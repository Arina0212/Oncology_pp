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
import { SubjectsData } from '../types/subjects-data';
import { PatienSData } from '../types/patients-data';

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

export const fetchSubjectsAction = createAsyncThunk<SubjectsData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSubjects',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<SubjectsData[]>(APIRoute.Subjects);
    return data;
  },
);

export const fetchSubjectTextAction = createAsyncThunk<SubjectData, {id: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSubjectText',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<SubjectData>(`${APIRoute.Subjects}/${id}/`);
    return data;
  },
);

export const CreatePatientsAction = createAsyncThunk<PatienSData, PatienSData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'patient/CreatePatients',
  async ({first_name, last_name, patronymic, birth_date, region, diagnosis}, {extra: api}) => {
    const {data} = await api.post<PatienSData>(APIRoute.Patiens, {first_name, last_name, patronymic, birth_date, region, diagnosis});
    console.log(data)
    return data;
  },
);

export const fetchPatientsInfoAction = createAsyncThunk<PatienSData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPatiensInfo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PatienSData[]>(APIRoute.Subjects);
    return data;
  },
);

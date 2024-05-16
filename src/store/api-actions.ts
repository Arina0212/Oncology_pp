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
import { PatienInfoData } from '../types/patient-info';
import { AnalysisDateData } from '../types/analysis-date';
import { AnalysData } from '../types/analys-data';
import { GraficData, Grafics } from '../types/grafic';
import { AnalysComparisonData } from '../types/analys-comparation';

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
  async ({first_name, last_name, patronymic, birth_date, region, diagnosis, diagnosis_comment, operation_comment, chemoterapy_comment}, {dispatch, extra: api}) => {
    const {data} = await api.post<PatienSData>(APIRoute.Patiens, {first_name, last_name, patronymic, birth_date, region, diagnosis, diagnosis_comment, operation_comment, chemoterapy_comment});
    console.log(data)
    dispatch(fetchPatiensInfoAction());
    dispatch(redirectToRoute(AppRoute.Search))

    return data;
  },
);


export const fetchPatiensInfoAction = createAsyncThunk<PatienInfoData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPatiensInfo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PatienInfoData[]>(APIRoute.PatiensInfo);
    console.log(data)
    return data;
  },
);

//редактирование данных о пациенте по id

export const UpdatePatientsAction = createAsyncThunk<PatienInfoData, PatienInfoData,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'patient/UpdatePatients',
  async ({id, first_name, last_name, patronymic, birth_date, region, diagnosis, diagnosis_comment, operation_comment, chemoterapy_comment}, {dispatch, extra: api}) => {
    const {data} = await api.put<PatienInfoData>(`${APIRoute.Patient}${id}/`, {id, first_name, last_name, patronymic, birth_date, region, diagnosis, diagnosis_comment, operation_comment, chemoterapy_comment});
    console.log(data)
    //dispatch(redirectToRoute(AppRoute.Search))
    dispatch(fetchPatiensInfoAction());

    return data;
  },
);

export const fetchFullPatientInfoAction = createAsyncThunk<PatienInfoData, {id: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFullPatientInfo',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<PatienInfoData>(`${APIRoute.Patient}${id}/`);
    dispatch(fetchAnalysisDateAction({id: Number(id)}))
    console.log("полная инфа по id",data)
    return data;
  },
);

export const fetchAnalysisDateAction = createAsyncThunk<AnalysisDateData, {id: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAnalysisDate',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<AnalysisDateData>(`${APIRoute.AnalysisDate}${id}/`);
    console.log("анализы по дате",data)
    return data;
  },
);

export const fetchAnalysAction = createAsyncThunk<AnalysData, {id: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAnalysDate',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<AnalysData>(`${APIRoute.AnalysData}${id}/`);
    return data;
  },
);

export const fetchGraficAction = createAsyncThunk<Grafics, {id: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchGrafic',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<Grafics>(`${APIRoute.Grafic}${id}/`);
    console.log(data)
    return data;
  },
);

export const fetchAnalysComparisonAction = createAsyncThunk<AnalysComparisonData , {id: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAnalysComparison',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<AnalysComparisonData>(`${APIRoute.Comparison}${id}/`);
    console.log(data)
    return data;
  },
);

export const CreatePatientAnalysesAction = createAsyncThunk<PostAnalyses, PostAnalyses, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'patient/CreatePatientsAnalyses',
  async ({analysis_date, test, patient_id}, {dispatch, extra: api}) => {
    const {data} = await api.post<PostAnalyses>(APIRoute.Patiens, {analysis_date, test, patient_id});
    console.log(data)
    dispatch(fetchPatiensInfoAction());
    dispatch(redirectToRoute(AppRoute.Search))

    return data;
  },
);

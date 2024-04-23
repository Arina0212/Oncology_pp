
export enum AppRoute {
  Main = '/',
  SignUp = '/signup',
  Login = '/login',
  Logout = '/logout',
  Patients = '/patients',
  PatientInfo =':id',
  Subjects = '/subject-info',
  Subject = ':id',
  Copyright = '/copyright-info',
  Search = '/search',
  addAnalysis = '/add-analysis',
  Analys = '/analysis'
}
  
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export const SingInErrorMessage = {
  Email: 'Введите верный email',
  Password: 'Пароль должен содежать хотя бы одину букву и одну цифру',
};
  
export enum APIRoute {
  SignUp = 'signup/',
  Login = 'login/',
  Logout = '/logout',
  Profile = 'profile/',
  Subjects = 'subject-info',
  Copyright ='copyright-info/',
  Patiens = 'create-patient/',
  Patient = 'edit-patient/',
  AnalysisDate = 'test-patient/',
  PatiensInfo = 'patients-info',
  AnalysData = 'patient-analysis/',
  Grafic = 'graphic/'
}

export enum NameSpace {
  User = 'USER',
  Copyright = 'COPYRIGHT',
  Subjects = 'SUBJECTS',
  Patiens = 'PATIENTS'
}
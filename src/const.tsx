export enum AppRoute {
  Main = '/',
  SignUp = '/signup',
  Login = '/login',
  Logout = '/logout',
  Profile = '/profile',
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
  SignUp = 'api/v1/signup/',
  Login = 'api/v1/login/',
  Logout = 'api/v1/logout/',
  Profile = 'api/v1/profile/'
}

export enum NameSpace {
  User = 'USER',
}
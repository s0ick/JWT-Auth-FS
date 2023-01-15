export const SPLINE_PATH = './scene.splinecode';
export const API_URL = `http://localhost:5000/api`;

export enum NotificationTypes {
  SUC = 'SUCCESS',
  ERR = 'ERROR'
}

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export enum AuthFields {
  EMAIL= 'Email',
  PAS = 'Password',
  R_PAS = 'Repeat passwrod'
}

export enum Endpoints {
  REG = '/registration',
  LOGIN = '/login',
  USERS = '/users',
  LOGOUT = '/logout',
  REFRESH = '/refresh'
}

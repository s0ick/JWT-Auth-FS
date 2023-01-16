export interface IUser {
  email: string;
  isActivate: boolean;
  id: string;
}

export interface IUsersList {
  list: Array<string>
}

export interface IUsers {
  isFetching: boolean;
  isDone: boolean;
  payload: null | IUsersList;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IAbortController {
  [key: string]: AbortController | null;
}

export interface IDynamicBody {
  [key: string]: string | number;
}

export interface IErrors {
  value: string,
  msg: string,
  param: string,
  location: string
}

export interface IAxiosError {
  errors: Array<IErrors>,
  message: string
}

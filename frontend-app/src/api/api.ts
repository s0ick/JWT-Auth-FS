import axios, {AxiosError, AxiosResponse} from 'axios';
import {AnyAction} from 'redux';

import {IAbortController, IAuthResponse, IAxiosError, IDynamicBody} from '../types/models';
import {API_URL, NotificationTypes} from '../utils/constants';
import {setAlert} from '../redux/reducers/alert-reducer';
import {formatErrorsArray} from '../utils/utils';
import {AppDispatch} from '../redux/store';

const abortControllers: IAbortController = {common: null};

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

$api.interceptors.request.use((request) => {
  if (request.headers) {
    request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return request;
});

$api.interceptors.response.use((response) => {
  return response;
},async (error) => {
  const originalRequest = error.config;
  if (error.response.status == 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
      localStorage.setItem('token', response.data.accessToken);
      return $api.request(originalRequest);
    } catch (e) {
      console.log('User is not authenticated');
    }
  }
  throw error;
});

export default $api;

const _handleAbortableRequestError = (
  error: AxiosError,
  dispatch: AppDispatch,
  abortActionCreator: () => AnyAction
) => {
  dispatch(abortActionCreator());

  if (axios.isAxiosError(error) && error.response) {
    const title = (error.response?.data as IAxiosError).message;
    const message = formatErrorsArray((error.response?.data as IAxiosError).errors) ;

    return dispatch(setAlert({
      type: NotificationTypes.ERR,
      title,
      message,
      delay: 30
    }));
  }

  return dispatch(setAlert({
    type: NotificationTypes.ERR,
    title: 'Unpredictable error',
    message: 'We are already working on fixing it',
    delay: 30
  }));
};


export const callAbortableApi = (
  requestActionCreator: () => AnyAction,
  receiveActionCreator: ((body: AxiosResponse) => AnyAction) | undefined,
  abortActionCreator: () => AnyAction,
  method: string,
  endpoint: string,
  payload: undefined | IDynamicBody,
  controllerName: string = 'common'
) => (dispatch: AppDispatch) => {
  const abortController = abortControllers[controllerName];

  if (abortController) {
    abortController.abort();
  }

  const controller = new AbortController();
  abortControllers[controllerName] = controller;
  dispatch(requestActionCreator());

  return $api.request({
    url: endpoint,
    method,
    data: payload,
    signal: controller.signal
  })
  .then((response: AxiosResponse) => {
    abortControllers[controllerName] = null;
    const {accessToken, refreshToken, ...payload} = response.data;

    if (accessToken) {
      localStorage.setItem('token', accessToken);
    }

    if (receiveActionCreator) {
      return dispatch(receiveActionCreator(payload));
    } else {
      dispatch(abortActionCreator());
    }
  })
  .catch(e => _handleAbortableRequestError(e, dispatch, abortActionCreator));
};

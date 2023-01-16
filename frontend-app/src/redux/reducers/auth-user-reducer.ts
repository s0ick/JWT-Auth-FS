import {createSlice} from '@reduxjs/toolkit';

import {Endpoints, Methods} from '../../utils/constants';
import {IDynamicBody} from '../../types/models';
import {callAbortableApi} from '../../api/api';

const userDataSlice = createSlice({
  name: 'auth-user-slice',
  initialState: {
    isFetching: false,
    isDone: false,
    payload: null,
  },
  reducers: {
    request: state => {
      state.isFetching = true;
      state.isDone = false;
      state.payload = null;
    },
    receive: (state, action) => {
      state.isFetching = false;
      state.isDone = true;
      state.payload = action.payload;
    },
    cancel: state => {
      state.isFetching = false;
      state.isDone = false;
      state.payload = null;
  }}
});

export const {
  actions: {
    request,
    receive,
    cancel
  },
  reducer: userDataReducer
} = userDataSlice;

export const authUser = (payload: IDynamicBody | undefined, endpoint: Endpoints, method: Methods) => callAbortableApi(
  request,
  receive,
  cancel,
  method,
  endpoint,
  payload,
  `${endpoint} User`
);

export const logout = () => callAbortableApi(
  request,
  undefined,
  cancel,
  Methods.POST,
  Endpoints.LOGOUT,
  undefined,
  `${Endpoints.LOGOUT} User`
);

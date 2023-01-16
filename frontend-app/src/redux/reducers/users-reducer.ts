import {createSlice} from '@reduxjs/toolkit';

import {Endpoints, Methods} from '../../utils/constants';
import {IDynamicBody} from '../../types/models';
import {callAbortableApi} from '../../api/api';

const usersSlice = createSlice({
  name: 'users-slice',
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
  reducer: usersReducer
} = usersSlice;

export const loadUsersList = (payload: IDynamicBody | undefined, endpoint: Endpoints, method: Methods) => callAbortableApi(
  request,
  receive,
  cancel,
  method,
  endpoint,
  payload,
  `${endpoint} List`
);

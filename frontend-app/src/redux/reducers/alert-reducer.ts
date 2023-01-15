import {createSlice} from '@reduxjs/toolkit';

import {NotificationTypes} from '../../utils/constants';

const alertSlice = createSlice({
  name: 'app/alert',
  initialState: {
    type: NotificationTypes.SUC,
    message: '',
    title: '',
    delay: 20
  },
  reducers: {
    setAlert: (state, action) => {
      const {type, message, title, delay} = action.payload;

      state.type = type;
      state.message = message;
      state.title = title;
      state.delay = delay;
    }
  }
});

export const {
  actions: {setAlert},
  reducer: alertReducer
} = alertSlice;

import {combineReducers} from 'redux';

import {userDataReducer} from './user-data-reducer';
import {alertReducer} from './alert-reducer';

export const rootReducer = combineReducers({
  user: userDataReducer,
  alert: alertReducer
});

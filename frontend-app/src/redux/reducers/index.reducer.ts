import {combineReducers} from 'redux';

import {userDataReducer} from './user-data-reducer';

export const rootReducer = combineReducers({
  user: userDataReducer
});

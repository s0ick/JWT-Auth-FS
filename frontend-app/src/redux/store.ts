import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import {rootReducer} from './reducers/index.reducer';
import {rootEpic} from './epics/index.epic';

const epicMiddleware = createEpicMiddleware();

const middlewares = [
  thunkMiddleware,
  logger,
  epicMiddleware
].filter(m => !!m);

export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(
      ...middlewares
    )
  )
);

epicMiddleware.run(rootEpic);

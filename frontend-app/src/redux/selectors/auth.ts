import {RootState} from '../store';

import {IUser} from '../../types/models';

export const getAuthIsFetching = (state: RootState) => state.user.isFetching;
export const getIsDoneUserData = (state: RootState) => state.user.isDone;
export const getUser = (state: RootState): null | IUser => state.user.payload;

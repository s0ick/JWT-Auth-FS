import {RootState} from '../store';

export const getAuthIsFetching = (state: RootState) => state.user.isFetching;
export const getIsDoneUserData = (state: RootState) => state.user.isDone;

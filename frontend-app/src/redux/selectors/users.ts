import {RootState} from '../store';

import {IUsers} from '../../types/models';

export const getUsersList = (state: RootState): IUsers => state.users;

import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {useAppDispatch} from '../../redux/store';
import {getUsersList} from '../../redux/selectors/users';
import {Endpoints, Methods} from '../../utils/constants';
import {loadUsersList} from '../../redux/reducers/users-reducer';
import {TextLoader} from '../../common/ui-components/loadres/text-loader';

import {
  AppContentText,
  AppContentTextLoaderWrapper,
  AppContentUsersList,
  AppContentWrapper
} from './app-content.styled';

export const AppContent = () => {
  const {isFetching, isDone, payload} = useSelector(getUsersList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUsersList(undefined, Endpoints.USERS, Methods.GET));
  }, []);

  return (
    <AppContentWrapper>
      {isFetching &&
        <AppContentTextLoaderWrapper>
          <TextLoader rows={2} repeat={8}/>
        </AppContentTextLoaderWrapper>
      }
      {(isDone && payload) && payload.list.map((u: string, index: number) =>
        <AppContentUsersList key={`user-key-${u}`}>
          <AppContentText>{`${index + 1}. `}</AppContentText>
          <AppContentText>{u}</AppContentText>
        </AppContentUsersList>
      )}
    </AppContentWrapper>
  );
}

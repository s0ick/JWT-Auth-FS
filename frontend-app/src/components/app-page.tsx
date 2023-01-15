import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Spline from '@splinetool/react-spline';

import {useAppDispatch} from '../redux/store';
import {getAlertData} from '../redux/selectors/alert';
import {getIsDoneUserData} from '../redux/selectors/auth';
import {authUser} from '../redux/reducers/user-data-reducer';
import {Endpoints, Methods, SPLINE_PATH} from '../utils/constants';
import {AppPageWrapper, AppSplineContainer} from '../common/styled/ui-components';
import {useNotification} from '../common/ui-components/notifications/notifications-provider';

import {AppForm} from './app-form/app-form';
import {PageLoader} from '../common/ui-components/loadres/page-loader';

export const AppPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const alertData = useSelector(getAlertData);
  const isDone = useSelector(getIsDoneUserData);

  const dispatch = useAppDispatch();
  const dispatchNotification = useNotification();

  useEffect(() => {
    if (alertData.message !== '') {
      dispatchNotification({...alertData});
    }
  }, [alertData, dispatchNotification]);

  useEffect( () => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(authUser(undefined, Endpoints.REFRESH, Methods.GET));
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoading(false);
    }

    if (isDone) {
      setIsLoading(false);
    }
  }, [isDone]);

  if (isLoading) {
    return (
      <AppPageWrapper>
        <PageLoader/>
      </AppPageWrapper>
    );
  }

  if (!isDone) {
    return (
      <AppPageWrapper>
        <AppForm/>
        <AppSplineContainer>
          <Spline scene={SPLINE_PATH}/>
        </AppSplineContainer>
      </AppPageWrapper>
    );
  }

  return (
    <div>
      {'Hello world'}
    </div>
  );
};

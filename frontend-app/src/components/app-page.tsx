import React from 'react';
import Spline from '@splinetool/react-spline';

import {SPLINE_PATH} from '../utils/constants';
import {AppPageWrapper, AppSplineContainer} from '../common/styled/ui-components';

import {AppForm} from './app-form/app-form';

const isAuth = false;

export const AppPage = () => {

  if (!isAuth) {
    return (
      <AppPageWrapper>
        <AppForm/>
        <AppSplineContainer>
          <Spline scene={SPLINE_PATH}/>
        </AppSplineContainer>
      </AppPageWrapper>
    );
  } else {
    return (
      <div>
        {'Hello world'}
      </div>
    );
  }
};

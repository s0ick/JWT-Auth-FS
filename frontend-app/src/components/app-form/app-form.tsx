import React, {useState} from 'react';

import {AppGlassEffect, AppInputField, AppButton, AppLink} from '../../common/styled/ui-components';

import {
  AppFormButtonWrapper,
  AppFormLinkWrapper,
  AppFormSubtitle,
  AppFormTitle,
  AppFormWrapper
} from './app-form.styled';

export const AppForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const toggleMode = () => setIsLoginMode(prevState => !prevState);

  return (
    <AppGlassEffect>
      <AppFormWrapper>
        <AppFormTitle>
          {'ONIX'}
        </AppFormTitle>

        <AppFormSubtitle>
          {'This custom registration form for testing JWT authenticated functions'}
        </AppFormSubtitle>

        <AppInputField placeholder={'Email'}/>

        <AppInputField placeholder={'Password'}/>

        {!isLoginMode &&
          <AppInputField placeholder={'Repeat password'}/>
        }

        <AppFormButtonWrapper>
          <AppButton>
            {isLoginMode ? 'Login' : 'Registration'}
          </AppButton>
        </AppFormButtonWrapper>

        <AppFormLinkWrapper>
          <AppLink onClick={toggleMode}>
            {isLoginMode ? 'Don\'t have an account?' : 'Already have an account'}
          </AppLink>
        </AppFormLinkWrapper>
      </AppFormWrapper>
    </AppGlassEffect>
  );
};

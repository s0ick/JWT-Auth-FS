import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';

import {useAppDispatch} from '../../redux/store';
import {setAlert} from '../../redux/reducers/alert-reducer';
import {getAuthIsFetching} from '../../redux/selectors/auth';
import {authUser} from '../../redux/reducers/user-data-reducer';
import {AuthFields, Endpoints, Methods, NotificationTypes} from '../../utils/constants';
import {AppButton, AppGlassEffect, AppInputField, AppLink} from '../../common/styled/ui-components';

import {
  AppFormButtonWrapper,
  AppFormLinkWrapper,
  AppFormSubtitle,
  AppFormTitle,
  AppFormWrapper
} from './app-form.styled';
import {Spinner} from '../../common/ui-components/loadres/spinner';

export const AppForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [repeatField, setRepeatField] = useState('');

  const dispatch = useAppDispatch();
  const isFetching = useSelector(getAuthIsFetching);

  const toggleMode = () => {
    setEmailField('');
    setPasswordField('');
    setRepeatField('');
    setIsLoginMode(prevState => !prevState);
  };

  const insertValue = (event: React.FormEvent<EventTarget>, field: string) => {
    const target = event.target as HTMLInputElement;

    switch (field) {
      case AuthFields.EMAIL:
        setEmailField(target.value);
        break;
      case AuthFields.PAS:
        setPasswordField(target.value);
        break;
      case AuthFields.R_PAS:
        setRepeatField(target.value);
        break;
      default: break;
    }
  };

  const onClickAuth = useCallback(
    () => {
      if (!emailField.length || !passwordField.length || (!isLoginMode && !repeatField.length)) {
        return dispatch(setAlert({
          type: NotificationTypes.ERR,
          title: 'Invalid value',
          message: 'Some of the fields are empty',
          delay: 50
        }));
      }

      if (!isLoginMode && passwordField !== repeatField) {
        return dispatch(setAlert({
          type: NotificationTypes.ERR,
          title: 'Invalid password',
          message: 'The entered passwords do not match',
          delay: 50
        }))
      }

      const endpoint = isLoginMode ? Endpoints.LOGIN : Endpoints.REG;

      dispatch(authUser({
        email: emailField,
        password: passwordField
      }, endpoint, Methods.POST));
    }, [emailField, passwordField, repeatField]
  );

  return (
    <AppGlassEffect>
      <AppFormWrapper>
        <AppFormTitle>
          {'ONIX'}
        </AppFormTitle>

        <AppFormSubtitle>
          {'This custom registration form for testing JWT authenticated functions'}
        </AppFormSubtitle>

        <AppInputField
          type={'email'}
          value={emailField}
          placeholder={AuthFields.EMAIL}
          onInput={e => insertValue(e, AuthFields.EMAIL)}
        />
        <AppInputField
          type={'password'}
          value={passwordField}
          placeholder={AuthFields.PAS}
          onInput={e => insertValue(e, AuthFields.PAS)}
        />

        {!isLoginMode &&
          <AppInputField
            type={'password'}
            value={repeatField}
            placeholder={AuthFields.R_PAS}
            onInput={e => insertValue(e, AuthFields.R_PAS)}
          />
        }

        <AppFormButtonWrapper>
          <AppButton onClick={onClickAuth} isFetching={isFetching}>
            {isFetching && <Spinner/>}
            <span>{isLoginMode ? 'Login' : 'Registration'}</span>
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

import React from 'react';
import {useSelector} from 'react-redux';

import {useAppDispatch} from '../../redux/store';
import {getUser} from '../../redux/selectors/auth';
import {AppLink} from '../../common/styled/ui-components';
import {logout} from '../../redux/reducers/auth-user-reducer';

import {AppNavbarText, AppNavbarWrapper} from './app-navbar.styled';

export const AppNavbar = () => {
  const user = useSelector(getUser);
  const dispatch = useAppDispatch();

  const onClick = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  }

  return (
    <AppNavbarWrapper>
      <AppNavbarText>
        {(user && !user.isActivate) && 'Activate your account' }
      </AppNavbarText>
      <AppLink onClick={onClick}>
        <span>{'Logout'}</span>
      </AppLink>
    </AppNavbarWrapper>
  );
}

import styled from 'styled-components';

import {HINT_TEXT_COLOR} from '../../common/styled/color-constants';

export const AppNavbarWrapper = styled.div`
  height: 70px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AppNavbarText = styled.div`
  color: ${HINT_TEXT_COLOR};
  font-size: 18px;
  text-align: center;
`;

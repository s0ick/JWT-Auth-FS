import styled from 'styled-components';

import {TEXT_COLOR} from '../../common/styled/color-constants';

export const AppContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  
  padding-left: 40px;
  padding-right: 40px;
`;

export const AppContentUsersList = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const AppContentText = styled.span`
  color: ${TEXT_COLOR};
  font-size: 24px;
  text-align: center;
`;

export const AppContentTextLoaderWrapper = styled.div`
  width: 600px;
`;

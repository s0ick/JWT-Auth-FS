import styled from 'styled-components';

import {HINT_TEXT_COLOR, TEXT_COLOR} from '../../common/styled/color-constants';

export const AppFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 420px;
  height: 550px;

  padding: 20px;
`;

export const AppFormTitle = styled.div`
  color: ${TEXT_COLOR};
  font-size: 64px;
  text-transform: uppercase;
  text-align: center;
  
  letter-spacing: 10px;
`;

export const AppFormSubtitle = styled.div`
  color: ${HINT_TEXT_COLOR};
  font-size: 18px;
  text-align: center;
  
  margin-top: 30px;
  margin-bottom: 15px;
  max-width: 360px;
`;

export const AppFormButtonWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const AppFormLinkWrapper = styled.div`
  margin-top: 15px;
`;

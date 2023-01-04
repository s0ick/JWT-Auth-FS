import styled from 'styled-components';

import {NotificationsStylesProps} from '../../types/ui-models';

import {slideLeft, slideRight} from './animations';
import {
  ACTION_COLOR,
  ACTION_HOVER_COLOR,
  HINT_TEXT_COLOR,
  TEXT_COLOR,
  ERROR,
  SUCCESS,
  SECONDARY_BACKGROUND
} from './color-constants';

export const AppPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100vh;
  position: relative;
`;

export const AppGlassEffect = styled.div`
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.19);

  background: rgba(9, 25, 33, 0.44);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  backdrop-filter: blur(5.1px);
  -webkit-backdrop-filter: blur(5.1px);
  z-index: 9999;
`;

export const AppSplineContainer = styled.div`
  position: absolute;
  z-index: 0;
  canvas {
    margin: auto;
    width: 1200px !important;
    height: 900px !important;
  }
`;

export const AppInputField = styled.input`
  width: 360px;
  height: 50px;
  
  color: ${TEXT_COLOR};
  
  padding: 8px 20px;
  
  font-size: 16px;
  
  background: none;
  border: 1px solid ${HINT_TEXT_COLOR};
  
  border-radius: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  
  transition: .35s border;
  
  :focus {
    border: 1px solid ${ACTION_COLOR};
  }
`;

export const AppButton = styled.button`
  border: none;
  background: none;

  border-radius: 16px;
  padding: 12px 30px;

  font-size: 18px;
  letter-spacing: 2px;

  background-color: ${ACTION_COLOR};
  color: ${TEXT_COLOR};

  transition: background-color .35s;

  :hover {
    cursor: pointer;
    background-color: ${ACTION_HOVER_COLOR};
  }
`;

export const AppLink = styled.span`
  color: ${ACTION_COLOR};
  font-size: 16px;
  transition: .35s color;
  
  :hover {
    cursor: pointer;
    color: ${ACTION_HOVER_COLOR};
  }
`;

export const NotificationsWrapper = styled.div`
  width: 300px;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 9999;
`;

export const NotificationItem = styled.div<NotificationsStylesProps>`
  overflow: hidden;
  margin-bottom: 20px;
  width: 300px;
  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  animation: ${props => (props.exit ? slideRight : slideLeft)} .4s;
  animation-fill-mode: forwards;
  
  background-color: ${SECONDARY_BACKGROUND};
  color: ${TEXT_COLOR};
  
  transition: background-color .2s ease-in;
  
  h3 {
    padding: 0;
    padding-left: 15px;
    padding-top: 10px;
    margin: 0;
    
    font-size: 16px;
  }
  
  p {
    margin: 0;
    padding: 10px;
    padding-left: 15px;
    margin-bottom: 8px;
    font-size: 14px;
  }
  
  div {
    background-color: ${props => (props.isSuccess ? SUCCESS : ERROR)};
    height: 5px;
  }
`;

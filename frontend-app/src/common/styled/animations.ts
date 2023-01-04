import {keyframes} from 'styled-components';

export const slideLeft = keyframes`
  0% {
    margin-left: 120%;
  }

  100% {
    margin-left: 0;
  }
`;

export const slideRight = keyframes`
  0% {
    margin-left: 0;
  }

  100% {
    margin-left: 120%;
  }
`;

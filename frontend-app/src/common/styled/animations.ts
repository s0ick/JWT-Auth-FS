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

export const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

export const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: .3;
  }
  100% {
    opacity: 1;
  }
`;

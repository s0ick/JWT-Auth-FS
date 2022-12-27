import {createGlobalStyle} from 'styled-components';

import {BACKGROUND_COLOR, HINT_TEXT_COLOR, TEXT_COLOR} from './styled/color-constants';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  
  a {
    text-decoration: none;
  };
  
  body, textarea {
    background-color: ${BACKGROUND_COLOR};
    color: ${TEXT_COLOR};
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial,sans-serif;
    
    transition: background 0.2s ease-in, color 0.2s ease-in;
  };
  
  button {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial,sans-serif;
  }
  
  textarea {
    overflow: hidden;
  }
  
  input {outline: none; font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial,sans-serif;};
  input::-moz-placeholder {color: ${HINT_TEXT_COLOR}};
  input::-webkit-input-placeholder {color: ${HINT_TEXT_COLOR}};
`;

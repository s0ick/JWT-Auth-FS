import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import {AppPage} from './components/app-page';
import {GlobalStyles} from './common/global-styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <AppPage/>
    <GlobalStyles/>
  </BrowserRouter>
);

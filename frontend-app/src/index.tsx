import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {AppPage} from './components/app-page';
import {GlobalStyles} from './common/global-styles';
import {NotificationsProvider} from './common/ui-components/notifications/notifications-provider';
import {store} from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <NotificationsProvider>
    <Provider store={store}>
      <BrowserRouter>
        <AppPage/>
        <GlobalStyles/>
      </BrowserRouter>
    </Provider>
  </NotificationsProvider>
);

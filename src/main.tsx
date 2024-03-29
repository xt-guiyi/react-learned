import React from 'react';
import ReactDOM from 'react-dom/client';
import '@assets/scss/index.scss';
import { router } from './router/index.tsx';
import { RouterProvider } from 'react-router-dom';

import store from './store/index.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

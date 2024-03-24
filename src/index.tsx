import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchCopyrightAction } from './store/api-actions';

store.dispatch(fetchCopyrightAction());
// store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
    
  </React.StrictMode>
);

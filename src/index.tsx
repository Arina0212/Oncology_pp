import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchCopyrightAction, fetchSubjectsAction } from './store/api-actions';

store.dispatch(fetchSubjectsAction());
store.dispatch(fetchCopyrightAction());





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        {/* <ToastContainer /> */}
        <App />
      </HistoryRouter>
    </Provider>
    
  </React.StrictMode>
);

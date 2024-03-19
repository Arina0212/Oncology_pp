import MainPage from '../../pages/main-page/main-page';
import Error from '../../pages/error/error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import LoginPopup from '../login-popup/login-popup';
import SignUpPopup from '../signup-popup/signup-popup';
import { HelmetProvider } from 'react-helmet-async';


export default function App() {

  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPopup />}
        />
        <Route
          path={AppRoute.SignUp}
          element={<SignUpPopup />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </HelmetProvider>
  );
}

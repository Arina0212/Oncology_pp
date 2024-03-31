import MainPage from '../../pages/main-page/main-page';
import Error from '../../pages/error-page/error-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import LoginPopup from '../login-popup/login-popup';
import SignUpPopup from '../signup-popup/signup-popup';
import { HelmetProvider } from 'react-helmet-async';
import UsagePage from '../../pages/usage-page/usage-page';
import CopyrightPage from '../../pages/copyright-page/copyright-page';
import SubjectText from '../subject-text/subject-text';
import { useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
// import PrivateRoute from '../private-route/private-route';
import PatPage from '../../pages/patients-page/patients-page';
import PatientsPage from '../../pages/patients-page/patients-page';


export default function App() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

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
        <Route path={AppRoute.Subjects} element={<UsagePage/>}>
          <Route path=":id" element={<MainPage />} />
        </Route>
        <Route
          path={AppRoute.Profile}
          element={
            // <PrivateRoute authorizationStatus={authorizationStatus}>
              <PatientsPage />
            // </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Copyright}
          element={<CopyrightPage />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </HelmetProvider>
  );
}

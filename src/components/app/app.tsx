import MainPage from '../../pages/main-page/main-page';
import Error from '../../pages/error-page/error-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import LoginPopup from '../login-popup/login-popup';
import SignUpPopup from '../signup-popup/signup-popup';
import { HelmetProvider } from 'react-helmet-async';
import UsagePage from '../../pages/usage-page/usage-page';
import CopyrightPage from '../../pages/copyright-page/copyright-page';
import PatientsPage from '../../pages/patients-page/patients-page';
import SearchPage from '../../pages/search-page/search-page';
import AddAnalysisPage from '../../pages/add-analysis-page/add-analysis-page';
import AnalysisPage from '../../pages/analysis-page/analysis-page';
import GraficPage from '../../pages/grafics-page/grafic-page';
import EditAnalysisPage from '../../pages/edit-analyse-page/edit-analyse-page';

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
        <Route path={AppRoute.Subjects} element={<UsagePage/>}>
          <Route path=":id" element={<MainPage />} />
        </Route>
        <Route
          path={AppRoute.Copyright}
          element={<CopyrightPage />}
        />
        <Route
          path={AppRoute.Search}
          element={
            <SearchPage />
          }
        />


        <Route path={AppRoute.Patients}>
          <Route path=':patid'>
            <Route index element={<PatientsPage />} />
            <Route path='add-analysis' element={<AddAnalysisPage />}/>
            <Route path='analysis'>
              <Route path=':analysisid' >
                <Route path=':analysid' >
                  <Route index element={<AnalysisPage/>}/>
                  <Route path='grafics' element={<GraficPage/>}>
                  </Route>
                  <Route path='edit-analysis' element={<EditAnalysisPage/>}>
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </HelmetProvider>
  );
}

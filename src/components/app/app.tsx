import MainPage from '../../pages/main-page/main-page';
import Error from '../../pages/error/error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

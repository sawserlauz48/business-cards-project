import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import ROUTES from "./ROUTES";
import LoginPage from "../pages/LoginPage";
import EditCardPage from "../pages/EditCardPage";
import ProtectedRoute from "../components/ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import SuperProtectedRoute from "../components/SuperProtectedRoute";
import LogoutPage from "../pages/LogoutPage";
import AboutPage from "../pages/AboutPage";
import FavCardsPage from "../pages/FavCardsPage";
import MyCardsPage from "../pages/MyCardsPage";
import SandboxPage from "../pages/SandboxPage";
import CreatCard from "../pages/CreatCard";
import CardInfo from "../pages/CardInfo";

import NestedPage1 from "../pages/NestedRoutePage/NestedPage1";
import NestedPage2 from "../pages/NestedRoutePage/NestedPage2";
import UseMemoPage from "../pages/ReRenderPage/UseMemoPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.FAKEHOME} element={<Navigate to={ROUTES.HOME} />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path="/cardinfo/:id" element={<CardInfo />} />
      <Route
        path={ROUTES.CREATCARD}
        element={
          <SuperProtectedRoute
            isAdmin={false}
            isBiz={true}
            element={<CreatCard />}
          />
        }
      />
      <Route
        path={ROUTES.LOGOUT}
        element={<ProtectedRoute element={<LogoutPage />} />}
      />
      <Route
        path={ROUTES.FAVCARDS}
        element={<ProtectedRoute element={<FavCardsPage />} />}
      />
      <Route
        path={ROUTES.MYCARDS}
        element={
          <SuperProtectedRoute
            isAdmin={false}
            isBiz={true}
            element={<MyCardsPage />}
          />
        }
      />
      <Route
        path={ROUTES.SANDBOX}
        element={
          <SuperProtectedRoute
            isAdmin={true}
            isBiz={false}
            element={<SandboxPage />}
          />
        }
      >
        <Route path="nestedpage1" element={<NestedPage1 />} />
        <Route path="nestedpage2" element={<NestedPage2 />} />
        <Route path="usememopage" element={<UseMemoPage />} />
        {/* <Route path="/rrp" element={<ReRenderPage />} /> */}
        {/* <Route path="/rp1" element={<RP1 />} /> */}
        {/* <Route path="/rp2" element={<RP2 />} /> */}
      </Route>
      <Route
        path="/edit/:id"
        element={
          <SuperProtectedRoute
            isAdmin={true}
            isBiz={true}
            element={<EditCardPage />}
          />
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={<ProtectedRoute element={<ProfilePage />} />}
      />
      <Route
        path="/createcard"
        element={
          <SuperProtectedRoute
            isAdmin={false}
            isBiz={true}
            element={<h1>Create card</h1>}
          />
        }
      />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default Router;

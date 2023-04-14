import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import ROUTES from "./ROUTES";
import LoginPage from "../pages/LoginPage";
import EditCardPage from "../pages/EditCardPage";
import ProtectedRoute from "../components/ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import {
  AdminProtectedRoute,
  BizProtectedRoute,
  SuperProtectedRoute,
} from "../components/SuperProtectedRoute";
import LogoutPage from "../pages/LogoutPage";
import FavCardsPage from "../pages/FavCardsPage";
import MyCardsPage from "../pages/MyCardsPage";
import SandboxPage from "../pages/SandboxPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.FAKEHOME} element={<Navigate to={ROUTES.HOME} />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route
        path={ROUTES.FAVCARDS}
        element={<ProtectedRoute element={<FavCardsPage />} />}
      />
      <Route
        path={ROUTES.MYCARDS}
        element={<BizProtectedRoute element={<MyCardsPage />} />}
      />
      <Route
        path={ROUTES.SANDBOX}
        element={<AdminProtectedRoute element={<SandboxPage />} />}
      />
      <Route
        path={ROUTES.LOGOUT}
        element={<ProtectedRoute element={<LogoutPage />} />}
      />
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
        element={<BizProtectedRoute element={<h1>Create card</h1>} />}
      />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default Router;

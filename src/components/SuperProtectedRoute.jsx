import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import ROUTES from "../routes/ROUTES";
import { toast } from "react-toastify";

const AdminProtectedRoute = ({ element, isAdmin }) => {
  const isLoggedIn = useSelector((bigState) => bigState.authSlice.isLoggedIn);
  const payload = useSelector((bigState) => bigState.authSlice.payload);
  if (isLoggedIn) {
    if (isAdmin && payload && payload.isAdmin) {
      return element;
    }
  }
  toast.error("invalid permissions, only admin can view this page");
  return <Navigate to={ROUTES.HOME} />;
};

const BizProtectedRoute = ({ element, isBiz }) => {
  const isLoggedIn = useSelector((bigState) => bigState.authSlice.isLoggedIn);
  const payload = useSelector((bigState) => bigState.authSlice.payload);
  if (isLoggedIn) {
    if (isBiz && payload && payload.biz) {
      return element;
    }
  }
  toast.error("invalid permissions, only business account can view this page");
  return <Navigate to={ROUTES.HOME} />;
};

const SuperProtectedRoute = ({ element, isAdmin, isBiz }) => {
  const isLoggedIn = useSelector((bigState) => bigState.authSlice.isLoggedIn);
  const payload = useSelector((bigState) => bigState.authSlice.payload);
  if (isLoggedIn) {
    if (
      (isAdmin && payload && payload.isAdmin) ||
      (isBiz && payload && payload.biz)
    ) {
      return element;
    }
  }
  toast.error(
    "invalid permissions, only business or admin account can view this page"
  );
  return <Navigate to={ROUTES.LOGIN} />;
};
export { AdminProtectedRoute, SuperProtectedRoute, BizProtectedRoute };

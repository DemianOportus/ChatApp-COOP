import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = true;
  const loggedIn = true;
  return user & loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;

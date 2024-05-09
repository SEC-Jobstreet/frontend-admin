import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAllowed, redirectPath = "/login" }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
}

export default ProtectedRoute;

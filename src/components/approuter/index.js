import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectUser } from "../../store/user";
import Home from "../../pages/homepage";
import Candidates from "../../pages/candidates";
import Employers from "../../pages/employers";
import Enterprises from "../../pages/enterprises";
import Jobs from "../../pages/jobs";
import Login from "../../pages/login";

import ProtectedRoute from "./protectedroute";

function AppRouter() {
  const user = useSelector(selectUser);

  console.log(user, !user?.email);

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={user.email === ""} redirectPath="/" />
        }
      >
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute isAllowed={user.email !== ""} />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/candidates" element={<Candidates />} />
        <Route exact path="/employers" element={<Employers />} />
        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/enterprises" element={<Enterprises />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;

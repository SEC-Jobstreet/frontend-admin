// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/homepage";
import Candidates from "../../pages/candidates";
import Employers from "../../pages/employers";
import Enterprises from "../../pages/enterprises";
import Jobs from "../../pages/jobs";

// import ProtectedRoute from "./protectedroute";

// import "../login/login-style.css";

function AppRouter() {
  // const user = useSelector(selectUser);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/candidates" element={<Candidates />} />
      <Route exact path="/employers" element={<Employers />} />
      <Route exact path="/jobs" element={<Jobs />} />
      <Route exact path="/enterprises" element={<Enterprises />} />
    </Routes>
  );
}

export default AppRouter;

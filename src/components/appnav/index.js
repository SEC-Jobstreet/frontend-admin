import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

import logo from "../../assets/svg/logo.svg";

function Nav() {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className={`sidebar ${!showNav && "close"}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={logo} alt="" />
          </span>
          <div className=" header-text">
            <span className="welcome text">Welcome</span>
            <span className="name text">Admin</span>
          </div>
        </div>
        <button
          className="toggle"
          type="button"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <i
            className={showNav ? "bx bx-chevron-left" : "bx bx-chevron-right"}
          ></i>
        </button>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/candidates">
                <i className="bx bx-face icon"></i>
                <span className="text nav-text">Candidates</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/employers">
                <i className="bx bxs-face icon"></i>
                <span className="text nav-text">Employers</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs">
                <i className="bx bx-shopping-bag icon"></i>
                <span className="text nav-text">Jobs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/enterprises">
                <i className="bx bx-buildings icon"></i>
                <span className="text nav-text">Enterprises</span>
              </NavLink>
            </li>
            <li>
              <button className="btn-logout">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Log out</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Nav;

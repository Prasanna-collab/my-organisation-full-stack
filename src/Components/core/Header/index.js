import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <h1>My Office</h1>
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/employees/add" className="navbar-brand">
                <h3>Add Employee</h3>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

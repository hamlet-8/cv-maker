import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/Logo.svg";

export const Header = () => {
  return (
    <nav className="header navbar navbar-dark">
      <div className="container-fluid">
        <NavLink className="header__logo navbar-brand" to="/">
          <img
            className="col-md-10 row"
            src={Logo}
            alt="Logo"
          />
        </NavLink>
      </div>
    </nav>
  );
};

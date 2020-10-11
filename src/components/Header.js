import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="header navbar navbar-dark">
      <div className="container-fluid">
        <NavLink className="header__logo navbar-brand" to="/">
          <img
            className="col-md-10 row"
            src={require("../img/Logo.svg")}
            alt=""
          />
        </NavLink>
      </div>
    </nav>
  );
};

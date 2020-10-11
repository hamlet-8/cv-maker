import React from "react";
import { NavLink } from "react-router-dom";
import "./templates.scss";

export const Templates = (props) => {
  const onTemplate1Change = (event) => {
    event = "template1";
    props.setTemplate(event);
  };

  const onTemplate2Change = (event) => {
    event = "template2";
    props.setTemplate(event);
  };

  const onTemplate3Change = (event) => {
    event = "template3";
    props.setTemplate(event);
  };

  const onTemplate4Change = (event) => {
    event = "template4";
    props.setTemplate(event);
  };

  return (
    <div className="templates">
      <div className="container">
        <div className="templates__title">
          <h2>Select a resume template to get started</h2>
          <span>You’ll be able to edit and change this template!</span>
        </div>
        <div className="templates__templates-blocks">
          <NavLink to="/contact" onClick={onTemplate1Change}>
            <div className="templates__template templates__template1"></div>
          </NavLink>
          <NavLink to="/contact" onClick={onTemplate2Change}>
            <div className="templates__template templates__template2"></div>
          </NavLink>
          <NavLink to="/contact" onClick={onTemplate3Change}>
            <div className="templates__template templates__template3"></div>
          </NavLink>
          <NavLink to="/contact" onClick={onTemplate4Change}>
            <div className="templates__template templates__template4"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

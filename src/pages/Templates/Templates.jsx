import React from "react";
import { NavLink } from "react-router-dom";
import "./templates.scss";

export const Templates = (props) => {
  const onTemplateChange = (event) => {
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
          <NavLink to="/contact" onClick={() => onTemplateChange("template1")}>
            <div className="templates__template templates__template1" />
          </NavLink>
          <NavLink to="/contact" onClick={() => onTemplateChange("template2")}>
            <div className="templates__template templates__template2" />
          </NavLink>
          <NavLink to="/contact" onClick={() => onTemplateChange("template3")}>
            <div className="templates__template templates__template3" />
          </NavLink>
          <NavLink to="/contact" onClick={() => onTemplateChange("template4")}>
            <div className="templates__template templates__template4" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

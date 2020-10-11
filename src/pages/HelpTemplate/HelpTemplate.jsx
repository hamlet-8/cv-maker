import React from "react";
import { NavLink } from "react-router-dom";
import "./helptemplate.scss";

export const HelpTemplate = () => {
  return (
    <div className="help-template">
      <div className="container">
        <div className="help-template__block">
          <div className="help-template__offer-structure">
            <div className="help-template__offer">
              <h2>Create your resume using templates</h2>
              <div className="help-template__paragraphs">
                <div>
                  <img src={require("../../img/blue-num1.svg")} alt="" />
                  <span className="help-template__one">
                    Select from one of our beautiful resume templates.
                  </span>
                </div>
                <div>
                  <img src={require("../../img/blue-num2.svg")} alt="" />
                  <span className="help-template__two">
                    Insert and customize pre-written content directly into your
                    resume.
                  </span>
                </div>
                <div>
                  <img src={require("../../img/blue-num3.svg")} alt="" />
                  <span className="help-template__three">
                    Download or print your brand new resume!
                  </span>
                </div>
              </div>
            </div>
            <NavLink to="/templates" className="help-template__button">
              Get started
            </NavLink>
          </div>
          <img src={require("../../img/blue-pencil.svg")} alt="" />
        </div>
      </div>
    </div>
  );
};

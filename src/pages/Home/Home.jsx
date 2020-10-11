import React from "react";
import { NavLink } from "react-router-dom";
import "./home.scss";

export const Home = () => {
  return (
    <div>
      <section className="home-section">
        <div className="container">
          <div className="home-section__block">
            <div className="home-section__offer-structure">
              <div className="home-section__offer">
                <h1>BUILD YOUR RESUME THE SMART WAY.</h1>
                <span>
                  Easily create an out of this world resume with expert content
                  that can be customized just for you!
                </span>
              </div>
              <NavLink to="/templates" className="home-section__button">
                Create a resume on a template
              </NavLink>
            </div>
            <img src={require("../../img/CV-home.svg")} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

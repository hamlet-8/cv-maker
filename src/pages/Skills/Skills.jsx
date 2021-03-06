import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./skills.scss";
import { ButtonTemplates } from "../../components/ButtonTemplates/ButtonTemplates";

export const Skills = (props) => {
  const [warning, setWarning] = useState({
    message: "",
    hasWarning: false,
    inputWarning: "",
  });

  const onSkillsChange = (event) => {
    props.setSkills(event.target.value);
  };

  const onContinueContact = () => {
    if (props.skills.trim() === "") {
      setWarning({
        message: "Fill in the Skills field",
        hasWarning: true,
        inputWarning: "skills",
      });
    }
  };

  const toggleBtn = () => {
    return props.skills.trim() === "";
  };

  return (
    <>
      <ButtonTemplates />
      <div className="skills">
        <div className="skills__block">
          <div className="skills__title">
            <h2>Skills</h2>
            <span>
              Add a few skills to show employers what you're good at. Add
              parentheses separated by commas.
            </span>
          </div>
          <div className="skills__textarea">
            {/* <label htmlFor="textarea">Job Description</label> */}
            <textarea
              className={`form-control ${
                warning.inputWarning === "skills" && "is-invalid"
              }`}
              id="textarea"
              value={props.skills}
              onChange={onSkillsChange}
            />
          </div>
          {warning.hasWarning && (
            <div
              className="alert alert-danger col-lg-12 text-center"
              role="alert"
            >
              {warning.message}
            </div>
          )}

          <div className="skills__buttonsContinueBack">
            <NavLink to="/education" className="skills__buttonBack ">
              Back
            </NavLink>
            {toggleBtn() && (
              <div className="skills__button" onClick={onContinueContact}>
                Continue
              </div>
            )}
            {!toggleBtn() && (
              <NavLink to="/summary" className="skills__button">
                Continue
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

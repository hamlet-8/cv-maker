import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./summary.scss";
import { ButtonTemplates } from "../../components/ButtonTemplates/ButtonTemplates";

export const Summary = (props) => {
  const [warning, setWarning] = useState({
    message: "",
    hasWarning: false,
    inputWarning: "",
  });

  const onSummaryChange = (event) => {
    props.setSummary(event.target.value);
  };

  const onContinueContact = () => {
    if (props.summary.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the Summary field",
        inputWarning: "summary",
      });
    }
  };

  const toggleBtn = () => {
    if (props.summary.trim() === "") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <ButtonTemplates />
      <div className="summary">
        <div className="summary__block">
          <div className="summary__title">
            <h2>Summary</h2>
            <span>
              Briefly describe the value that you bring through your skills,
              background and experience.
            </span>
          </div>
          <div className="summary__textarea">
            {/* <label htmlFor="textarea">Job Description</label> */}
            <textarea
              className={`form-control ${
                warning.inputWarning === "summary" && "is-invalid"
              }`}
              id="textarea"
              value={props.summary}
              onChange={onSummaryChange}
            />
          </div>

          {warning.hasWarning === false && (
            <div
              className="alert alert-danger col-lg-12 text-center"
              role="alert"
            >
              {warning.message}
            </div>
          )}

          <div className="summary__buttonsContinueBack">
            <NavLink to="/skills" className="summary__buttonBack ">
              Back
            </NavLink>
            {toggleBtn() === false && (
              <div className="summary__button" onClick={onContinueContact}>
                Continue
              </div>
            )}
            {toggleBtn() === true && (
              <NavLink to="/your-resume" className="summary__button ">
                Continue
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

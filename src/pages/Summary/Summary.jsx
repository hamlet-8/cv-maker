import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./summary.scss";
import { ButtonTemplates } from "../../components/ButtonTemplates/ButtonTemplates";

export const Summary = (props) => {
  const [warning, setWarning] = useState(true);
  const [warningInput, setWarningInput] = useState('');

  const onSummaryChange = (event) => {
    props.setSummary(event.target.value);
  };

  const onContinueContact = () => {
  
    if(props.summary.trim() === '') {
      setWarning('Fill in the Summary field')
      setWarningInput('summary');
    }else {
      setWarning(false)
    }
  }

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
              className={`form-control ${warningInput === 'summary' && 'is-invalid'}`}
              id="textarea"
              value={props.summary}
              onChange={onSummaryChange}
            ></textarea>
          </div>

          {warning !== true && 
            <div className="alert alert-danger col-lg-12 text-center" role="alert">
              {warning}
            </div>}


          <div className="summary__buttonsContinueBack">
            <NavLink to="/skills" className="summary__buttonBack ">
              Back
          </NavLink>
          {props.summary.trim() === '' ?
            <div className="summary__button" onClick={onContinueContact}>
            Continue
          </div>:<NavLink to="/your-resume" className="summary__button ">
            Continue
          </NavLink>}
        </div>
          
        </div>
      </div>
    </>
  );
};

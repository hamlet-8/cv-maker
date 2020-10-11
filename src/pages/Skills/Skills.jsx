import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./skills.scss";
import { ButtonTemplates } from "../../components/ButtonTemplates/ButtonTemplates";

export const Skills = (props) => {
  const [warning, setWarning] = useState(true);
  const [warningInput, setWarningInput] = useState('');

  const onSkillsChange = (event) => {
    props.setSkills(event.target.value);
  };

  const onContinueContact = () => {

    if (props.skills.trim() === '') {
      setWarning('Fill in the Skills field')
      setWarningInput('skills');
    } else {
      setWarning(false)
    }
  }

  return (
    <>
      <ButtonTemplates />
      <div className="skills">
        <div className="skills__block">
          <div className="skills__title">
            <h2>Skills</h2>
            <span>
              Add a few skills to show employers what you're good at. Add parentheses separated by commas.
            </span>
          </div>
          <div className="skills__textarea">
            {/* <label htmlFor="textarea">Job Description</label> */}
            <textarea
              className={`form-control ${warningInput === 'skills' && 'is-invalid'}`}
              id="textarea"
              value={props.skills}
              onChange={onSkillsChange}
            ></textarea>
          </div>
          {warning !== true &&
            <div className="alert alert-danger col-lg-12 text-center" role="alert">
              {warning}
            </div>}

          <div className="skills__buttonsContinueBack">
            <NavLink to="/education" className="skills__buttonBack ">
              Back
          </NavLink>
            {props.skills.trim() === '' ?
              <div className="skills__button" onClick={onContinueContact}>
                Continue
          </div> : <NavLink to="/summary" className="skills__button">
                Continue
          </NavLink>}
          </div>

        </div>
      </div>
    </>
  );
};

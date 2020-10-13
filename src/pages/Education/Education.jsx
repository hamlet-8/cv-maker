import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./education.scss";
import { ButtonTemplates } from "../../components/ButtonTemplates/ButtonTemplates";

export const Education = (props) => {
  const [warning, setWarning] = useState(true);
  const [warningInput, setWarningInput] = useState(true);
  const year = [];
  for (let i = 1990; i <= 2020; i++) {
    year.push(i);
  }

  const onUniversityNameChange = (event) => {
    props.setUniversityName(event.target.value);
  };
  const onCityChange = (event) => {
    props.setCity(event.target.value);
  };
  const onCountryChange = (event) => {
    props.setCountry(event.target.value);
  };
  const onDegreeChange = (event) => {
    props.setDegree(event.target.value);
  };
  const onGraduationDateChange = (event) => {
    props.setGraduationDate(event.target.value);
  };

  const onContinueContact = () => {
    if(props.universityName.trim() === '') {
      setWarning('Fill in the University Name field')
      setWarningInput('universityName');
    }else if(props.city.trim() === '') {
      setWarning('Fill in the City field')
      setWarningInput('city');
    }else if(props.country.trim() === '') {
      setWarning('Fill in the Country field')
      setWarningInput('country');
    }else if(props.degree.trim() === '') {
      setWarning('Fill in the Degree field')
      setWarningInput('degree');
    }else if(props.graduationDate.trim() === '') {
      setWarning('Fill in the Graduation Date field')
      setWarningInput('graduationDate');
    }
  }

   const toggleBtn = () => {
    if(props.universityName.trim() === '' || props.city.trim() === '' ||
            props.country.trim() === '' ||
            props.degree.trim() === '' ||
            props.graduationDate.trim() === '') {
              return false
            }else {
              return true
            }
  }

  return (
    <>
      <ButtonTemplates />
      <div className="education">
        <div className="education__block">
          <div className="education__title">
            <h2>Education</h2>
            <span>Start with your most recent educational institution.</span>
          </div>

          <div className="education__inputs">
            <div className="education__input education__university-name form-group">
              <label htmlFor="university-name" className={warningInput === 'universityName' && 'text-danger'}>University Name</label>
              <input
                type="text"
                id="university-name"
                className={`form-control ${warningInput === 'universityName' && 'is-invalid'}`}
                value={props.universityName}
                onChange={onUniversityNameChange}
              />
            </div>
            <div className="education__input education__city form-group">
              <label htmlFor="city" className={warningInput === 'city' && 'text-danger'}>City</label>
              <input
                type="text"
                id="city"
                className={`form-control ${warningInput === 'city' && 'is-invalid'}`}
                value={props.city}
                onChange={onCityChange}
              />
            </div>
            <div className="education__input education__country form-group">
              <label htmlFor="country" className={warningInput === 'country' && 'text-danger'}>Country</label>
              <input
                type="text"
                id="country"
                className={`form-control ${warningInput === 'country' && 'is-invalid'}`}
                value={props.country}
                onChange={onCountryChange}
              />
            </div>
            <div className="education__input education__degree form-group">
              <label htmlFor="degree" className={warningInput === 'degree' && 'text-danger'}>Degree</label>
              <input
                type="text"
                id="degree"
                className={`form-control ${warningInput === 'degree' && 'is-invalid'}`}
                value={props.degree}
                onChange={onDegreeChange}
              />
            </div>
            <div className="education__input education__graduation-date form-group">
              <label htmlFor="graduation-date" className={warningInput === 'graduationDate' && 'text-danger'}>Graduation Date</label>
              <select 
                  id="graduation-date"
                  className={`form-control ${warningInput === 'graduationDate' && 'is-invalid'}`}
                  value={props.graduationDate}
                  onChange={onGraduationDateChange}>
                    {year.map(e => <option>{e}</option>)}
                </select>
            </div>
          </div>
          {warning !== true && 
            <div className="alert alert-danger col-lg-12 text-center" role="alert">
              {warning}
            </div>}
          
        <div className="education__buttonsContinueBack">
          <NavLink to="/experience" className="education__buttonBack ">
             Back
          </NavLink>
          { toggleBtn() === false && 
            <div className="education__button" onClick={onContinueContact}>
            Continue
          </div> }
          { toggleBtn() === true && 
            <NavLink to="/skills" className="education__button ">
              Continue
            </NavLink>
          }
          
        </div>  

          
        </div>
      </div>
    </>
  );
};

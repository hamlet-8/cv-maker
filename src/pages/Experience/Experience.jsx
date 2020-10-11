import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./experience.scss";
import { ButtonTemplates } from "../../components/ButtonTemplates/ButtonTemplates";

export const Experience = (props) => {
  const [warning, setWarning] = useState(true);
  const [warningInput, setWarningInput] = useState('');
  const year = [];
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  for (let i = 1990; i <= 2020; i++) {
    year.push(i);
  }
  
  const onJobTitleChange = (event) => {
    props.setJobTitle(event.target.value);
  };
  const onCompanyChange = (event) => {
    props.setCompany(event.target.value);
  };
  const onCityChange = (event) => {
    props.setCity(event.target.value);
  };
  const onCountryChange = (event) => {
    props.setCountry(event.target.value);
  };
  const onStartDateYearChange = (event) => {
    props.setStartDateYear(event.target.value);
  };
  const onStartDateMonthChange = (event) => {
    props.setStartDateMonth(event.target.value);
  };
  const onEndDateYearChange = (event) => {
    props.setEndDateYear(event.target.value);
  };
  const onEndDateMonthChange = (event) => {
    props.setEndDateMonth(event.target.value);
  };
  const onJobDescriptionChange = (event) => {
    props.setJobDescription(event.target.value);
  };

  const onContinueContact = () => {
  
    if(props.jobTitle.trim() === '') {
      setWarning('Fill in the Full Job Title')
      setWarningInput('jobTitle');
    }else if(props.company.trim() === '') {
      setWarning('Fill in the Company field')
      setWarningInput('company');
    }else if(props.city.trim() === '') {
      setWarning('Fill in the City field')
      setWarningInput('city');
    }else if(props.country.trim() === '') {
      setWarning('Fill in the Country field')
      setWarningInput('country');
    }/* else if(props.startDateYear.trim() === '') {
      setWarning('Fill in the Start Date field')
      setWarningInput('startDateYear');
    }else if(props.endDateYear.trim() === '') {
      setWarning('Fill in the End Date field')
      setWarningInput('endDateYear');
    } */else if(props.jobDescription.trim() === '') {
      setWarning('Fill in the Job Description field')
      setWarningInput('jobDescription');
    }else {
      setWarning(false)
    }
  }

  return (
    <>
      <ButtonTemplates />
      <div className="experience">
        <div className="experience__block">
          <div className="experience__title">
            <h2>Work Experience</h2>
            <span>Start with your most recent position.</span>
          </div>
          <div className="experience__inputs-textarea">
            <div className="experience__inputs">
              <div className="experience__input experience__jobe-title form-group">
                <label htmlFor="jobe-title" className={warningInput === 'jobTitle' && 'text-danger'}>Job Title</label>
                <input
                  type="text"
                  id="jobe-title"
                  className={`form-control ${warningInput === 'jobTitle' && 'is-invalid'}`}
                  value={props.jobTitle}
                  onChange={onJobTitleChange}
                />
              </div>
              <div className="experience__input experience__company form-group">
                <label htmlFor="company"className={warningInput === 'company' && 'text-danger'}>Company</label>
                <input
                  type="text"
                  id="company"
                  className={`form-control ${warningInput === 'company' && 'is-invalid'}`}
                  value={props.company}
                  onChange={onCompanyChange}
                />
              </div>
              <div className="experience__input experience__city form-group">
                <label htmlFor="street-city"className={warningInput === 'city' && 'text-danger'}>City</label>
                <input
                  type="text"
                  id="street-city"
                  className={`form-control ${warningInput === 'city' && 'is-invalid'}`}
                  value={props.city}
                  onChange={onCityChange}
                />
              </div>
              <div className="experience__input experience__country form-group">
                <label htmlFor="country"className={warningInput === 'country' && 'text-danger'}>Country</label>
                <input
                  type="text"
                  id="country"
                  className={`form-control ${warningInput === 'country' && 'is-invalid'}`}
                  value={props.country}
                  onChange={onCountryChange}
                />
              </div>

              <div className="experience__input experience__start-date-year form-group">
                <label htmlFor="start-date-year"className={warningInput === 'startDateYear' && 'text-danger'}>Start Year</label>
                 <select 
                  id="start-date-year"
                  class="form-control"
                  value={props.startDateYear}
                  onChange={onStartDateYearChange}>
                    {year.map(e => <option>{e}</option>)}
                </select>
              </div>
              <div className="experience__input experience__start-date-month form-group">
                <label htmlFor="start-date-month"className={warningInput === 'startDateMonth' && 'text-danger'}>Start Month</label>
                 <select 
                  id="start-date-month"
                  class="form-control" 
                  value={props.startDateMonth}
                  onChange={onStartDateMonthChange}>
                    {month.map(e => <option>{e}</option>)}
                </select>
              </div>

              <div className="experience__input experience__end-date-year form-group">
                <label htmlFor="end-date-year"className={warningInput === 'endDateYear' && 'text-danger'}>End Year</label>
                 <select 
                  id="end-date-year"
                  className={`form-control ${warningInput === 'endDateYear' && 'is-invalid'}`}
                  value={props.endDateYear}
                  onChange={onEndDateYearChange}>
                    {year.map(e => <option>{e}</option>)}
                </select>
              </div>

              <div className="experience__input experience__end-date-month form-group">
                <label htmlFor="end-date-month"className={warningInput === 'endDateMonth' && 'text-danger'}>End Month</label>
                 <select 
                  id="end-date-month"
                  className={`form-control ${warningInput === 'endDateMonth' && 'is-invalid'}`}
                  value={props.endDateMonth}
                  onChange={onEndDateMonthChange}>
                    {month.map(e => <option>{e}</option>)}
                </select>
              </div>
            </div>
            <div className="experience__textarea">
              <label htmlFor="textarea"className={warningInput === 'jobDescription' && 'text-danger'}>Job Description</label>
              <textarea
                className={`form-control ${warningInput === 'jobDescription' && 'is-invalid'}`}
                id="textarea"
                value={props.jobDescription}
                onChange={onJobDescriptionChange}
              ></textarea>
            </div>
          </div>

          {warning !== true && 
            <div className="alert alert-danger col-lg-12 text-center" role="alert">
              {warning}
            </div>}
          <div className="experience__buttonsContinueBack">
            <NavLink to="/contact" className="experience__buttonBack ">
             Back
            </NavLink>
            {props.jobTitle.trim() === '' || props.company.trim() === '' ||
            props.city.trim() === '' ||
            props.country.trim() === '' ||
            props.startDateYear.trim() === '' ||
            props.startDateMonth.trim() === '' ||
            props.endDateYear.trim() === '' ||
            props.endDateMonth.trim() === '' ||
            props.jobDescription.trim() === '' ?  
            <div className="experience__button" onClick={onContinueContact}>
            Continue
          </div>:<NavLink to="/education" className="experience__button ">
            Continue
          </NavLink> }
          
          </div>
          

          
        </div>
      </div>
    </>
  );
};

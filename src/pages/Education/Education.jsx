import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./education.scss";
import { ButtonTemplates } from "../../components/ButtonTemplates/ButtonTemplates";

export const Education = (props) => {
  const [warning, setWarning] = useState({
    message: "",
    hasWarning: false,
    inputWarning: "",
  });
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
    if (props.universityName.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the University Name field",
        hasWarning: true,
        inputWarning: "universityName",
      });
    } else if (props.city.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the City field",
        hasWarning: true,
        inputWarning: "city",
      });
    } else if (props.country.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the Country field",
        hasWarning: true,
        inputWarning: "country",
      });
    } else if (props.degree.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the Degree field",
        hasWarning: true,
        inputWarning: "degree",
      });
    } else if (props.graduationDate.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the Graduation Date field",
        hasWarning: true,
        inputWarning: "graduationDate",
      });
    }
  };

  const toggleBtn = () => {
    return (
      props.universityName.trim() === "" ||
      props.city.trim() === "" ||
      props.country.trim() === "" ||
      props.degree.trim() === "" ||
      props.graduationDate.trim() === ""
    );
  };

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
              <label
                htmlFor="university-name"
                className={
                  warning.inputWarning === "universityName" && "text-danger"
                }
              >
                University Name
              </label>
              <input
                type="text"
                id="university-name"
                className={`form-control ${
                  warning.inputWarning === "universityName" && "is-invalid"
                }`}
                value={props.universityName}
                onChange={onUniversityNameChange}
              />
            </div>
            <div className="education__input education__city form-group">
              <label
                htmlFor="city"
                className={warning.inputWarning === "city" && "text-danger"}
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className={`form-control ${
                  warning.inputWarning === "city" && "is-invalid"
                }`}
                value={props.city}
                onChange={onCityChange}
              />
            </div>
            <div className="education__input education__country form-group">
              <label
                htmlFor="country"
                className={warning.inputWarning === "country" && "text-danger"}
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                className={`form-control ${
                  warning.inputWarning === "country" && "is-invalid"
                }`}
                value={props.country}
                onChange={onCountryChange}
              />
            </div>
            <div className="education__input education__degree form-group">
              <label
                htmlFor="degree"
                className={warning.inputWarning === "degree" && "text-danger"}
              >
                Degree
              </label>
              <input
                type="text"
                id="degree"
                className={`form-control ${
                  warning.inputWarning === "degree" && "is-invalid"
                }`}
                value={props.degree}
                onChange={onDegreeChange}
              />
            </div>
            <div className="education__input education__graduation-date form-group">
              <label
                htmlFor="graduation-date"
                className={
                  warning.inputWarning === "graduationDate" && "text-danger"
                }
              >
                Graduation Date
              </label>
              <select
                id="graduation-date"
                className={`form-control ${
                  warning.inputWarning === "graduationDate" && "is-invalid"
                }`}
                value={props.graduationDate}
                onChange={onGraduationDateChange}
              >
                {year.map((e, i) => (
                  <option key={i}>{e}</option>
                ))}
              </select>
            </div>
          </div>
          {warning.hasWarning && (
            <div
              className="alert alert-danger col-lg-12 text-center"
              role="alert"
            >
              {warning.message}
            </div>
          )}

          <div className="education__buttonsContinueBack">
            <NavLink to="/experience" className="education__buttonBack ">
              Back
            </NavLink>
            {toggleBtn() && (
              <div className="education__button" onClick={onContinueContact}>
                Continue
              </div>
            )}
            {!toggleBtn() && (
              <NavLink to="/skills" className="education__button ">
                Continue
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

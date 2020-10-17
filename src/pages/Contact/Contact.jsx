import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import "./contact.scss";
import { ButtonTemplates } from "../../components/ButtonTemplates/ButtonTemplates";
// import { findAllByTestId } from "@testing-library/react";

export const Contact = (props) => {
  const emailValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const numberValidate = /\D/;
  const [warning, setWarning] = useState({
    message: "",
    hasWarning: false,
    inputWarning: "",
  });
  // useCallback(setWarning({ ...warning, message: "hello" }), [warning.message]);

  const onFullNameChange = (event) => {
    props.setFullName(event.target.value);
  };
  const onEmailChange = (event) => {
    props.setEmail(event.target.value);
  };
  const onStreetAddressChange = (event) => {
    props.setStreetAddress(event.target.value);
  };
  const onCityChange = (event) => {
    props.setCity(event.target.value);
  };
  const onCountryChange = (event) => {
    props.setCountry(event.target.value);
  };
  const onPhoneNumberChange = (event) => {
    props.setPhoneNumber(event.target.value);
  };

  const onContinueContact = () => {
    if (props.fullName.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the Full Name field",
        inputWarning: "fullName",
      });
    } else if (props.email.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the Email field",
        inputWarning: "email",
      });
    } else if (!emailValidate.test(String(props.email.trim()).toLowerCase())) {
      setWarning({
        ...warning,
        message: "Fill in the email field correctly",
        inputWarning: "email",
      });
    } else if (props.streetAddress.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the Street Address field",
        inputWarning: "streetAddress",
      });
    } else if (props.city.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the City field",
        inputWarning: "city",
      });
    } else if (props.country.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the Country field",
        inputWarning: "country",
      });
    } else if (props.phoneNumber.trim() === "") {
      setWarning({
        ...warning,
        message: "Fill in the Phone Number field",
        inputWarning: "phoneNumber",
      });
    } else if (numberValidate.test(props.phoneNumber)) {
      setWarning({
        ...warning,
        message: "Only numbers are allowed",
        inputWarning: "phoneNumber",
      });
    } else {
      setWarning({ ...warning, hasWarning: true });
    }
  };

  const toggleBtn = () => {
    if (
      props.fullName.trim() === "" ||
      props.email.trim() === "" ||
      !emailValidate.test(String(props.email.trim()).toLowerCase()) ||
      props.streetAddress.trim() === "" ||
      props.city.trim() === "" ||
      props.country.trim() === "" ||
      props.phoneNumber.trim() === "" ||
      numberValidate.test(props.phoneNumber)
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <ButtonTemplates />
      <div className="contact">
        <div className="contact__block">
          <div className="contact__title">
            <h2>Write about yourself</h2>
            <span>Fields with an asterisk are required</span>
          </div>

          <div className="contact__inputs">
            <div className="contact__input contact__full-name form-group">
              <label
                htmlFor="full-name"
                className={warning.inputWarning === "fullName" && "text-danger"}
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                className={`form-control ${
                  warning.inputWarning === "fullName" && "is-invalid"
                }`}
                value={props.fullName}
                onChange={onFullNameChange}
              />
            </div>
            <div className="contact__input contact__email form-group">
              <label
                htmlFor="email"
                className={warning.inputWarning === "email" && "text-danger"}
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className={`form-control ${
                  warning.inputWarning === "email" && "is-invalid"
                }`}
                value={props.email}
                onChange={onEmailChange}
              />
            </div>
            <div className="contact__input contact__street-address form-group">
              <label
                htmlFor="street-address"
                className={
                  warning.inputWarning === "streetAddress" && "text-danger"
                }
              >
                Street Address
              </label>
              <input
                type="text"
                id="street-address"
                className={`form-control ${
                  warning.inputWarning === "streetAddress" && "is-invalid"
                }`}
                value={props.streetAddress}
                onChange={onStreetAddressChange}
              />
            </div>
            <div className="contact__input contact__city form-group">
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
            <div className="contact__input contact__country form-group">
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
            <div className="contact__input contact__phone-number form-group">
              <label
                htmlFor="phone-number"
                className={
                  warning.inputWarning === "phoneNumber" && "text-danger"
                }
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone-number"
                className={`form-control ${
                  warning.inputWarning === "phoneNumber" && "is-invalid"
                }`}
                value={props.phoneNumber}
                onChange={onPhoneNumberChange}
              />
            </div>
          </div>

          {warning.hasWarning === false && (
            <div
              className="alert alert-danger col-lg-12 text-center"
              role="alert"
            >
              {warning.message}
            </div>
          )}

          {toggleBtn() === false && (
            <div className="contact__button" onClick={onContinueContact}>
              Continue
            </div>
          )}
          {toggleBtn() === true && (
            <NavLink to="/experience" className="contact__button">
              Continue
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

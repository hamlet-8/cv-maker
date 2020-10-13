import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./contact.scss";
import { ButtonTemplates } from "../../components/ButtonTemplates/ButtonTemplates";

export const Contact = (props) => {
  const emailValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const numberValidate = /\D/;
  const [warning, setWarning] = useState(true);
  const [warningInput, setWarningInput] = useState('');


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
  
    if(props.fullName.trim() === '') {
      setWarning('Fill in the Full Name field')
      setWarningInput('fullName');
    }else if(props.email.trim() === '') {
      setWarning('Fill in the Email field')
      setWarningInput('email');
    }else if(!(emailValidate.test(String(props.email.trim()).toLowerCase()))) {
      setWarning('Fill in the email field correctly')
      setWarningInput('email');
    }else if(props.streetAddress.trim() === '') {
      setWarning('Fill in the Street Address field')
      setWarningInput('streetAddress');
    }else if(props.city.trim() === '') {
      setWarning('Fill in the City field')
      setWarningInput('city');
    }else if(props.country.trim() === '') {
      setWarning('Fill in the Country field')
      setWarningInput('country');
    }else if(props.phoneNumber.trim() === '') {
      setWarning('Fill in the Phone Number field')
      setWarningInput('phoneNumber');
    }else if(numberValidate.test(props.phoneNumber)) {
      setWarning('Only numbers are allowed')
      setWarningInput('phoneNumber');
    }
  }

  const toggleBtn = () => {
    if(props.fullName.trim() === '' || props.email.trim() === '' ||
            !(emailValidate.test(String(props.email.trim()).toLowerCase())) ||
            props.streetAddress.trim() === '' ||
            props.city.trim() === '' ||
            props.country.trim() === '' ||
            props.phoneNumber.trim() === '' ||
            numberValidate.test(props.phoneNumber)) {
              return false
            }else {
              return true
            }
  }


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
              <label htmlFor="full-name" className={warningInput === 'fullName' && 'text-danger'}>Full Name</label>
              <input
                type="text"
                id="full-name"
                className={`form-control ${warningInput === 'fullName' && 'is-invalid'}`}
                value={props.fullName}
                onChange={onFullNameChange}
              />
            </div>
            <div className="contact__input contact__email form-group">
              <label htmlFor="email" className={warningInput === 'email' && 'text-danger'}>Email</label>
              <input
                type="text"
                id="email"
                className={`form-control ${warningInput === 'email' && 'is-invalid'}`}
                value={props.email}
                onChange={onEmailChange}
              />
            </div>
            <div className="contact__input contact__street-address form-group">
              <label htmlFor="street-address" className={warningInput === 'streetAddress' && 'text-danger'}>Street Address</label>
              <input
                type="text"
                id="street-address"
                className={`form-control ${warningInput === 'streetAddress' && 'is-invalid'}`}
                value={props.streetAddress}
                onChange={onStreetAddressChange}
              />
            </div>
            <div className="contact__input contact__city form-group">
              <label htmlFor="city" className={warningInput === 'city' && 'text-danger'}>City</label>
              <input
                type="text"
                id="city"
                className={`form-control ${warningInput === 'city' && 'is-invalid'}`}
                value={props.city}
                onChange={onCityChange}
              />
            </div>
            <div className="contact__input contact__country form-group">
              <label htmlFor="country" className={warningInput === 'country' && 'text-danger'}>Country</label>
              <input
                type="text"
                id="country"
                className={`form-control ${warningInput === 'country' && 'is-invalid'}`}
                value={props.country}
                onChange={onCountryChange}
              />
            </div>
            <div className="contact__input contact__phone-number form-group">
              <label htmlFor="phone-number" className={warningInput === 'phoneNumber' && 'text-danger'}>Phone Number</label>
              <input
                type="tel"
                id="phone-number"
                className={`form-control ${warningInput === 'phoneNumber' && 'is-invalid'}`}
                value={props.phoneNumber}
                onChange={onPhoneNumberChange}
              />
            </div>
          </div>

          {warning !== true && 
            <div className="alert alert-danger col-lg-12 text-center" role="alert">
              {warning}
            </div>}

          { toggleBtn() === false &&   
            <div className="contact__button" onClick={onContinueContact}>
            Continue
          </div> }
          { toggleBtn() === true &&
          <NavLink to="/experience" className="contact__button">
            Continue
          </NavLink>}
      
        </div>
      </div>
    </>
  );
};

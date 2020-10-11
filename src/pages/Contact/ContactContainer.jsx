import React from "react";
import { connect } from "react-redux";
import { Contact } from "./Contact";
import {
  setFullName,
  setEmail,
  setStreetAddress,
  setCity,
  setCountry,
  setPhoneNumber,
} from "../../store/contact/actions";

const ContactContainer = (props) => {
  return (
    <Contact
      fullName={props.fullName}
      email={props.email}
      streetAddress={props.streetAddress}
      city={props.city}
      country={props.country}
      phoneNumber={props.phoneNumber}
      setFullName={props.setFullName}
      setEmail={props.setEmail}
      setStreetAddress={props.setStreetAddress}
      setCity={props.setCity}
      setCountry={props.setCountry}
      setPhoneNumber={props.setPhoneNumber}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    fullName: state.contact.fullName,
    email: state.contact.email,
    streetAddress: state.contact.streetAddress,
    city: state.contact.city,
    country: state.contact.country,
    phoneNumber: state.contact.phoneNumber,
  };
};

const mapDispatchToProps = {
  setFullName,
  setEmail,
  setStreetAddress,
  setCity,
  setCountry,
  setPhoneNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);

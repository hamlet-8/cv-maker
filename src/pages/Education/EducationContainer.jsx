import React from "react";
import { connect } from "react-redux";
import { Education } from "./Education";
import {
  setUniversityName,
  setCity,
  setCountry,
  setDegree,
  setGraduationDate,
} from "../../store/education/actions";

const EducationContainer = (props) => {
  return (
    <Education
      universityName={props.universityName}
      city={props.city}
      country={props.country}
      degree={props.degree}
      graduationDate={props.graduationDate}
      setUniversityName={props.setUniversityName}
      setCity={props.setCity}
      setCountry={props.setCountry}
      setDegree={props.setDegree}
      setGraduationDate={props.setGraduationDate}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    universityName: state.education.universityName,
    city: state.education.city,
    country: state.education.country,
    degree: state.education.degree,
    graduationDate: state.education.graduationDate,
  };
};

const mapDispatchToProps = {
  setUniversityName,
  setCity,
  setCountry,
  setDegree,
  setGraduationDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationContainer);

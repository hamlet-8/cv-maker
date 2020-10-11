import React from "react";
import { connect } from "react-redux";
import { Experience } from "./Experience";
import {
  setJobTitle,
  setCompany,
  setCity,
  setCountry,
  setStartDateYear,
  setStartDateMonth,
  setEndDateYear,
  setEndDateMonth,
  setJobDescription,
} from "../../store/experience/actions";

const ExperienceContainer = (props) => {
  return (
    <Experience
      jobTitle={props.jobTitle}
      company={props.company}
      city={props.city}
      country={props.country}
      startDateYear={props.startDateYear}
      startDateMonth={props.startDateMonth}
      endDateYear={props.endDateYear}
      endDateMonth={props.endDateMonth}
      jobDescription={props.jobDescription}
      setJobTitle={props.setJobTitle}
      setCompany={props.setCompany}
      setCity={props.setCity}
      setCountry={props.setCountry}
      setStartDateYear={props.setStartDateYear}
      setStartDateMonth={props.setStartDateMonth}
      setEndDateYear={props.setEndDateYear}
      setEndDateMonth={props.setEndDateMonth}
      setJobDescription={props.setJobDescription}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    jobTitle: state.experience.jobTitle,
    company: state.experience.company,
    city: state.experience.city,
    country: state.experience.country,
    startDateYear: state.experience.startDateYear,
    startDateMonth: state.experience.startDateMonth,
    endDateYear: state.experience.endDateYear,
    endDateMonth: state.experience.endDateMonth,
    jobDescription: state.experience.jobDescription,
  };
};

const mapDispatchToProps = {
  setJobTitle,
  setCompany,
  setCity,
  setCountry,
  setStartDateYear,
  setStartDateMonth,
  setEndDateYear,
  setEndDateMonth,
  setJobDescription,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceContainer);

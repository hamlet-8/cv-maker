import {
  EXPERIENCE_CHANGE_JOBTITLE,
  EXPERIENCE_CHANGE_COMPANY,
  EXPERIENCE_CHANGE_CITY,
  EXPERIENCE_CHANGE_COUNTRY,
  EXPERIENCE_CHANGE_STARTDATEYEAR,
  EXPERIENCE_CHANGE_STARTDATEMONTH,
  EXPERIENCE_CHANGE_ENDDATEYEAR,
  EXPERIENCE_CHANGE_ENDDATEMONTH,
  EXPERIENCE_CHANGE_JOBDESCRIPTION,
} from "./actions";

const defaultState = {
  jobTitle: "",
  company: "",
  city: "",
  country: "",
  startDateYear: "",
  startDateMonth: "",
  endDateYear: "",
  endDateMonth: "",
  jobDescription: ""
};
/* 
 jobTitle: "Programming",
  company: "ProTag",
  city: "Yerevan",
  country: "Armenia",
  startDateYear: "2019",
  startDateMonth: "May",
  endDateYear: "2020",
  endDateMonth: "April",
  jobDescription: "A job description is an internal document that clearly states the essential job requirements, job duties, job responsibilities, and skills required to perform a specific role. A more detailed job description will cover how success is measured in the role so it can be used during performance evaluations. They are also known as a job specification, job profiles, JD, and position description (job PD)." */

export const experienceReducer = (state = defaultState, action) => {
  // console.log(state);
  switch (action.type) {
    case EXPERIENCE_CHANGE_JOBTITLE:
      return {
        ...state,
        jobTitle: action.payload,
      };
    case EXPERIENCE_CHANGE_COMPANY:
      return {
        ...state,
        company: action.payload,
      };
    case EXPERIENCE_CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case EXPERIENCE_CHANGE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case EXPERIENCE_CHANGE_STARTDATEYEAR:
      return {
        ...state,
        startDateYear: action.payload,
      };
    case EXPERIENCE_CHANGE_STARTDATEMONTH:
      return {
        ...state,
        startDateMonth: action.payload,
      };
    case EXPERIENCE_CHANGE_ENDDATEYEAR:
      return {
        ...state,
        endDateYear: action.payload,
      };
    case EXPERIENCE_CHANGE_ENDDATEMONTH:
      return {
        ...state,
        endDateMonth: action.payload,
      };
    case EXPERIENCE_CHANGE_JOBDESCRIPTION:
      return {
        ...state,
        jobDescription: action.payload,
      };
    default:
      return state;
  }
};

import {
  EDUCATION_CHANGE_UNIVERSITYNAME,
  EDUCATION_CHANGE_CITY,
  EDUCATION_CHANGE_COUNTRY,
  EDUCATION_CHANGE_DEGREE,
  EDUCATION_CHANGE_GRADUATIONDATE,
} from "./actions";

const defaultState = {
  universityName: "Polytechnik",
  city: "Yerevan",
  country: "Armenia",
  degree: "uppermost",
  graduationDate: "2020",
};

/* universityName: "",
  city: "",
  country: "",
  degree: "",
  graduationDate: "", */

/* universityName: "Polytechnik",
  city: "Yerevan",
  country: "Armenia",
  degree: "uppermost",
  graduationDate: "2020", */

export const educationReducer = (state = defaultState, action) => {
  // console.log(state);
  switch (action.type) {
    case EDUCATION_CHANGE_UNIVERSITYNAME:
      return {
        ...state,
        universityName: action.universityName,
      };
    case EDUCATION_CHANGE_CITY:
      return {
        ...state,
        city: action.city,
      };
    case EDUCATION_CHANGE_COUNTRY:
      return {
        ...state,
        country: action.country,
      };
    case EDUCATION_CHANGE_DEGREE:
      return {
        ...state,
        degree: action.degree,
      };
    case EDUCATION_CHANGE_GRADUATIONDATE:
      return {
        ...state,
        graduationDate: action.graduationDate,
      };
    default:
      return { ...state };
  }
};

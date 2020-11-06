import {
  CONTACT_CHANGE_FULLNAME,
  CONTACT_CHANGE_EMAIL,
  CONTACT_CHANGE_STREETADDRESS,
  CONTACT_CHANGE_CITY,
  CONTACT_CHANGE_COUNTRY,
  CONTACT_CHANGE_PHONENUMBER,
} from "./actions";

const defaultState = {
  fullName: "",
  email: "",
  streetAddress: "",
  city: "",
  country: "",
  phoneNumber: "",
};

/* fullName: "",
  email: "",
  streetAddress: "",
  city: "",
  country: "",
  phoneNumber: "", */

/* fullName: "Ashot",
  email: "ashot.xazaryan@gmail.com",
  streetAddress: "masiv",
  city: "Yrevan",
  country: "Armenia",
  phoneNumber: "099857858", */

export const contactReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONTACT_CHANGE_FULLNAME:
      return {
        ...state,
        fullName: action.fullName,
      };
    case CONTACT_CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case CONTACT_CHANGE_STREETADDRESS:
      return {
        ...state,
        streetAddress: action.streetAddress,
      };
    case CONTACT_CHANGE_CITY:
      return {
        ...state,
        city: action.city,
      };
    case CONTACT_CHANGE_COUNTRY:
      return {
        ...state,
        country: action.country,
      };
    case CONTACT_CHANGE_PHONENUMBER:
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };
    default:
      return { ...state };
  }
};

import {
  CONTACT_CHANGE_FULLNAME,
  CONTACT_CHANGE_EMAIL,
  CONTACT_CHANGE_STREETADDRESS,
  CONTACT_CHANGE_CITY,
  CONTACT_CHANGE_COUNTRY,
  CONTACT_CHANGE_PHONENUMBER,
} from "./actions";

const defaultState = {
  fullName: "Ashot",
  email: "ashot.xazaryan@gmail.com",
  streetAddress: "masiv",
  city: "Yrevan",
  country: "Armenia",
  phoneNumber: "099857858",
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
        fullName: action.payload,
      };
    case CONTACT_CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case CONTACT_CHANGE_STREETADDRESS:
      return {
        ...state,
        streetAddress: action.payload,
      };
    case CONTACT_CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case CONTACT_CHANGE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case CONTACT_CHANGE_PHONENUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };
    default:
      return state;
  }
};

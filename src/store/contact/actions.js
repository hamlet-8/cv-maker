export const CONTACT_CHANGE_FULLNAME = "CONTACT_CHANGE_FULLNAME";
export const CONTACT_CHANGE_EMAIL = "CONTACT_CHANGE_EMAIL";
export const CONTACT_CHANGE_STREETADDRESS = "CONTACT_CHANGE_STREETADDRESS";
export const CONTACT_CHANGE_CITY = "CONTACT_CHANGE_CITY";
export const CONTACT_CHANGE_COUNTRY = "CONTACT_CHANGE_COUNTRY";
export const CONTACT_CHANGE_PHONENUMBER = "CONTACT_CHANGE_PHONENUMBER";

export const setFullName = (fullName) => ({
  type: CONTACT_CHANGE_FULLNAME,
  payload: fullName,
});

export const setEmail = (email) => ({
  type: CONTACT_CHANGE_EMAIL,
  payload: email,
});

export const setStreetAddress = (streetAddress) => ({
  type: CONTACT_CHANGE_STREETADDRESS,
  payload: streetAddress,
});

export const setCity = (city) => ({
  type: CONTACT_CHANGE_CITY,
  payload: city,
});

export const setCountry = (country) => ({
  type: CONTACT_CHANGE_COUNTRY,
  payload: country,
});

export const setPhoneNumber = (phoneNumber) => ({
  type: CONTACT_CHANGE_PHONENUMBER,
  payload: phoneNumber,
});

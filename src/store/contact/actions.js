export const CONTACT_CHANGE_FULLNAME = "CONTACT_CHANGE_FULLNAME";
export const CONTACT_CHANGE_EMAIL = "CONTACT_CHANGE_EMAIL";
export const CONTACT_CHANGE_STREETADDRESS = "CONTACT_CHANGE_STREETADDRESS";
export const CONTACT_CHANGE_CITY = "CONTACT_CHANGE_CITY";
export const CONTACT_CHANGE_COUNTRY = "CONTACT_CHANGE_COUNTRY";
export const CONTACT_CHANGE_PHONENUMBER = "CONTACT_CHANGE_PHONENUMBER";

export const setFullName = (fullName) => ({
  type: CONTACT_CHANGE_FULLNAME,
  fullName: fullName,
});

export const setEmail = (email) => ({
  type: CONTACT_CHANGE_EMAIL,
  email: email,
});

export const setStreetAddress = (streetAddress) => ({
  type: CONTACT_CHANGE_STREETADDRESS,
  streetAddress: streetAddress,
});

export const setCity = (city) => ({
  type: CONTACT_CHANGE_CITY,
  city: city,
});

export const setCountry = (country) => ({
  type: CONTACT_CHANGE_COUNTRY,
  country: country,
});

export const setPhoneNumber = (phoneNumber) => ({
  type: CONTACT_CHANGE_PHONENUMBER,
  phoneNumber: phoneNumber,
});

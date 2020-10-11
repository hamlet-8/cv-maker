export const EXPERIENCE_CHANGE_JOBTITLE = "EXPERIENCE_CHANGE_JOBTITLE";
export const EXPERIENCE_CHANGE_COMPANY = "EXPERIENCE_CHANGE_COMPANY";
export const EXPERIENCE_CHANGE_CITY = "EXPERIENCE_CHANGE_CITY";
export const EXPERIENCE_CHANGE_COUNTRY = "EXPERIENCE_CHANGE_COUNTRY";
export const EXPERIENCE_CHANGE_STARTDATEYEAR = "EXPERIENCE_CHANGE_STARTDATEYEAR";
export const EXPERIENCE_CHANGE_STARTDATEMONTH = "EXPERIENCE_CHANGE_STARTDATEMONTH";
export const EXPERIENCE_CHANGE_ENDDATEYEAR = "EXPERIENCE_CHANGE_ENDDATEYEAR";
export const EXPERIENCE_CHANGE_ENDDATEMONTH = "EXPERIENCE_CHANGE_ENDDATEMONTH";
export const EXPERIENCE_CHANGE_JOBDESCRIPTION =
  "EXPERIENCE_CHANGE_JOBDESCRIPTION";

export const setJobTitle = (jobTitle) => ({
  type: EXPERIENCE_CHANGE_JOBTITLE,
  payload: jobTitle,
});

export const setCompany = (company) => ({
  type: EXPERIENCE_CHANGE_COMPANY,
  payload: company,
});

export const setCity = (city) => ({
  type: EXPERIENCE_CHANGE_CITY,
  payload: city,
});

export const setCountry = (country) => ({
  type: EXPERIENCE_CHANGE_COUNTRY,
  payload: country,
});

export const setStartDateYear = (startDateYear) => ({
  type: EXPERIENCE_CHANGE_STARTDATEYEAR,
  payload: startDateYear,
});

export const setStartDateMonth = (startDateMonth) => ({
  type: EXPERIENCE_CHANGE_STARTDATEMONTH,
  payload: startDateMonth,
});

export const setEndDateYear = (endDateYear) => ({
  type: EXPERIENCE_CHANGE_ENDDATEYEAR,
  payload: endDateYear,
});

export const setEndDateMonth = (endDateMonth) => ({
  type: EXPERIENCE_CHANGE_ENDDATEMONTH,
  payload: endDateMonth,
});

export const setJobDescription = (jobDescription) => ({
  type: EXPERIENCE_CHANGE_JOBDESCRIPTION,
  payload: jobDescription,
});

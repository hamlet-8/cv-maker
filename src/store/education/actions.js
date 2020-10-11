export const EDUCATION_CHANGE_UNIVERSITYNAME = "EDUCATION_CHANGE_UNIVERSITYNAME";
export const EDUCATION_CHANGE_CITY = "EDUCATION_CHANGE_CITY";
export const EDUCATION_CHANGE_COUNTRY = "EDUCATION_CHANGE_COUNTRY";
export const EDUCATION_CHANGE_DEGREE = "EDUCATION_CHANGE_DEGREE";
export const EDUCATION_CHANGE_GRADUATIONDATE =
  "EDUCATION_CHANGE_GRADUATIONDATE";

export const setUniversityName = (universityName) => ({
  type: EDUCATION_CHANGE_UNIVERSITYNAME,
  payload: universityName,
});

export const setCity = (city) => ({
  type: EDUCATION_CHANGE_CITY,
  payload: city,
});

export const setCountry = (country) => ({
  type: EDUCATION_CHANGE_COUNTRY,
  payload: country,
});

export const setDegree = (degree) => ({
  type: EDUCATION_CHANGE_DEGREE,
  payload: degree,
});

export const setGraduationDate = (graduationDate) => ({
  type: EDUCATION_CHANGE_GRADUATIONDATE,
  payload: graduationDate,
});

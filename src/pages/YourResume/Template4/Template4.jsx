import React from "react";
import "./template4.scss";

const Template4 = ({
  contactFullName,
  contactEmail,
  contactStreetAddress,
  contactCity,
  contactCountry,
  contactPhoneNumber,
  experienceJobTitle,
  experienceCompany,
  experienceCity,
  experienceCountry,
  experienceStartDateYear,
  experienceStartDateMonth,
  experienceEndDateYear,
  experienceEndDateMonth,
  experienceJobDescription,
  educationUniversityName,
  educationCity,
  educationCountry,
  educationDegree,
  educationGraduationDate,
  skillsSkills,
  summarySummary,
}) => (
  <div className="yourresume__content-tamplate4">
    <div className="yourresume__contact-tamplate4">
      <h2>{contactFullName}</h2>
      <span>{contactEmail} | {contactPhoneNumber}</span>
      <span>{contactStreetAddress}, {contactCity}, {contactCountry}</span>
    </div>
    <div className="yourresume__second-block-tamplate4">
      <div className="yourresume__summary-tamplate4">
        <h3>Summary</h3>
        <span>{summarySummary}</span>
      </div>
      <div className="yourresume__skills-tamplate4">
        <h3>Skills</h3>
        <span>{skillsSkills}</span>
      </div>
      <div className="yourresume__experience-tamplate4">
        <h3>Experience</h3>
        <h4>{experienceJobTitle}</h4>
        <span>
          {experienceCompany} - {experienceCity}, {experienceCountry} |
          {' ' + experienceStartDateMonth + " / " + experienceStartDateYear} - {experienceEndDateMonth + " / " + experienceEndDateYear}
        </span>
        <span>{experienceJobDescription}</span>
      </div>
      <div className="yourresume__education-tamplate4">
        <h3>Education</h3>
        <h4>{educationDegree}</h4>
        <span>
          {educationUniversityName} | {educationCity}, {educationCountry} | {' '}
          {educationGraduationDate}
        </span>
      </div>
    </div>
  </div>
);

export default Template4;

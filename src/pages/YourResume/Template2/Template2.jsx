import React from "react";
import "./template2.scss";

const Template2 = ({
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
  <div className="yourresume__content-tamplate2">
    <div className="yourresume__contact-tamplate2">
      <h2>{contactFullName}</h2>
      <span>
        {contactPhoneNumber} | {contactEmail} | {contactStreetAddress},{" "}
        {contactCity}, {contactCountry}
      </span>
    </div>
    <div className="yourresume__second-block-tamplate2">
      <div className="yourresume__summary-tamplate2">
        <h3>Summary</h3>
        <span>{summarySummary}</span>
      </div>
      <div className="yourresume__skills-tamplate2">
        <h3>Skills</h3>
        <span>{skillsSkills}</span>
      </div>
      <div className="yourresume__experience-tamplate2">
        <h3>Experience</h3>
        <h4>{experienceJobTitle}</h4>
        <span>
          {experienceCompany} - {experienceCity}, {experienceCountry} |
          {' ' + experienceStartDateMonth + " / " + experienceStartDateYear} - {experienceEndDateMonth + " / " + experienceEndDateYear}
        </span>
        <span>{experienceJobDescription}</span>
      </div>
      <div className="yourresume__education-tamplate2">
        <h3>Education</h3>
        <h4>{educationDegree}</h4>
        <span>
          {educationUniversityName} | {educationCity}, {educationCountry} |
          {" " + educationGraduationDate}
        </span>
      </div>
    </div>
  </div>
);

export default Template2;

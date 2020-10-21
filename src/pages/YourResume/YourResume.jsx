import React from "react";
import { connect } from "react-redux";
import { ButtonTemplates } from "../../components/ButtonTemplates/ButtonTemplates";
import "./template1.scss";
import "./template2.scss";
import "./template3.scss";
import "./template4.scss";

import * as html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import { setTemplate } from "../../store/templates/actions";

import "./yourresume.scss";

const YourResume = ({
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
  templates,
  setTemplate,
}) => {
  let list = document.getElementById("list");

  const printDocument = () => {
    // let parent = document.getElementById("yourresume__list");
    let list = document.getElementById("yourresume__list");
    let clist = list.cloneNode(true);
    clist.classList.add("clist");

    document.body.appendChild(clist);
    window.scrollTo(0, 0);
    html2canvas(clist).then((canvas) => {
      // document.body.appendChild(canvas);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm");
      pdf.addImage(imgData, "PNG", 8, 8);
      // pdf.output("dataurlnewwindow");
      pdf.save("download.pdf");
      // document.body.removeChild(clist);
    });
  };

  const onTemplateChange = (event) => {
    setTemplate(event);
  };
  return (
    <div className="yourresume">
      <div className="yourresume__left-block">
        <div id="yourresume__list" className="yourresume__list">
          <div id="list">
            <div
              className={
                (templates === "template1" &&
                  "yourresume__content-tamplate1") ||
                (templates === "template2" &&
                  "yourresume__content-tamplate2") ||
                (templates === "template3" &&
                  "yourresume__content-tamplate3") ||
                (templates === "template4" && "yourresume__content-tamplate4")
              }
            >
              <div
                className={
                  (templates === "template1" &&
                    "yourresume__contact-tamplate1") ||
                  (templates === "template2" &&
                    "yourresume__contact-tamplate2") ||
                  (templates === "template3" &&
                    "yourresume__contact-tamplate3") ||
                  (templates === "template4" && "yourresume__contact-tamplate4")
                }
              >
                <h2>{contactFullName}</h2>
                <span>
                  {contactEmail} | {contactPhoneNumber}
                </span>
                <span>
                  {contactStreetAddress}, {contactCity}, {contactCountry}
                </span>
              </div>
              <div
                className={
                  (templates === "template1" &&
                    "yourresume__second-block-tamplate1") ||
                  (templates === "template2" &&
                    "yourresume__second-block-tamplate2") ||
                  (templates === "template3" &&
                    "yourresume__second-block-tamplate3") ||
                  (templates === "template4" &&
                    "yourresume__second-block-tamplate4")
                }
              >
                <div
                  className={
                    (templates === "template1" &&
                      "yourresume__summary-tamplate1") ||
                    (templates === "template2" &&
                      "yourresume__summary-tamplate2") ||
                    (templates === "template3" &&
                      "yourresume__summary-tamplate3") ||
                    (templates === "template4" &&
                      "yourresume__summary-tamplate4")
                  }
                >
                  <h3>Summary</h3>
                  <span>{summarySummary}</span>
                </div>
                <div
                  className={
                    (templates === "template1" &&
                      "yourresume__skills-tamplate1") ||
                    (templates === "template2" &&
                      "yourresume__skills-tamplate2") ||
                    (templates === "template3" &&
                      "yourresume__skills-tamplate3") ||
                    (templates === "template4" &&
                      "yourresume__skills-tamplate4")
                  }
                >
                  <h3>Skills</h3>
                  <span>{skillsSkills}</span>
                </div>
                <div
                  className={
                    (templates === "template1" &&
                      "yourresume__experience-tamplate1") ||
                    (templates === "template2" &&
                      "yourresume__experience-tamplate2") ||
                    (templates === "template3" &&
                      "yourresume__experience-tamplate3") ||
                    (templates === "template4" &&
                      "yourresume__experience-tamplate4")
                  }
                >
                  <h3>Experience</h3>
                  <h4>{experienceJobTitle}</h4>
                  <span>
                    {experienceCompany} - {experienceCity}, {experienceCountry}{" "}
                    |
                    {" " +
                      experienceStartDateMonth +
                      " / " +
                      experienceStartDateYear}{" "}
                    - {experienceEndDateMonth + " / " + experienceEndDateYear}
                  </span>
                  <span>{experienceJobDescription}</span>
                </div>
                <div
                  className={
                    (templates === "template1" &&
                      "yourresume__education-tamplate1") ||
                    (templates === "template2" &&
                      "yourresume__education-tamplate2") ||
                    (templates === "template3" &&
                      "yourresume__education-tamplate3") ||
                    (templates === "template4" &&
                      "yourresume__education-tamplate4")
                  }
                >
                  <h3>Education</h3>
                  <h4>{educationDegree}</h4>
                  <span>
                    {educationUniversityName} | {educationCity},{" "}
                    {educationCountry} |{" " + educationGraduationDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="yourresume__right-block">
        <div onClick={printDocument} className="yourresume__btnPdf">
          Generate PDF
        </div>

        <div className="yourresume__templates">
          <div
            className="yourresume__template1"
            onClick={() => onTemplateChange("template1")}
          />
          <div
            className="yourresume__template2"
            onClick={() => onTemplateChange("template2")}
          />
          <div
            className="yourresume__template3"
            onClick={() => onTemplateChange("template3")}
          />
          <div
            className="yourresume__template4"
            onClick={() => onTemplateChange("template4")}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contactFullName: state.contact.fullName,
    contactEmail: state.contact.email,
    contactStreetAddress: state.contact.streetAddress,
    contactCity: state.contact.city,
    contactCountry: state.contact.country,
    contactPhoneNumber: state.contact.phoneNumber,

    experienceJobTitle: state.experience.jobTitle,
    experienceCompany: state.experience.company,
    experienceCity: state.experience.city,
    experienceCountry: state.experience.country,
    experienceStartDateYear: state.experience.startDateYear,
    experienceStartDateMonth: state.experience.startDateMonth,
    experienceEndDateYear: state.experience.endDateYear,
    experienceEndDateMonth: state.experience.endDateMonth,
    experienceJobDescription: state.experience.jobDescription,

    educationUniversityName: state.education.universityName,
    educationCity: state.education.city,
    educationCountry: state.education.country,
    educationDegree: state.education.degree,
    educationGraduationDate: state.education.graduationDate,

    skillsSkills: state.skills.skills,

    summarySummary: state.summary.summary,

    templates: state.templates.template,
  };
};

const mapDispatchToProps = {
  setTemplate,
};

export default connect(mapStateToProps, mapDispatchToProps)(YourResume);

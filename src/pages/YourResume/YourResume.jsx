import React from "react";
import { connect } from "react-redux";
import { ButtonTemplates } from "../../components/ButtonTemplates/ButtonTemplates";
import Template1 from "./Template1/Template1";
import Template2 from "./Template2/Template2";
import Template3 from "./Template3/Template3";
import Template4 from "./Template4/Template4";

import * as html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf';

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
  setTemplate
}) => {
  
    const printDocument = () => {
      let list = document.getElementById('list')
      html2canvas(list).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      });
    }

      const onTemplateChange = (event) => {
        setTemplate(event);
      }
  return (
    <div className="yourresume">
      <ButtonTemplates />
      <div className="yourresume__left-block">
        <div id="list" className="yourresume__list">
          {templates === "template1" && (
            <Template1
              contactFullName={contactFullName}
              contactEmail={contactEmail}
              contactStreetAddress={contactStreetAddress}
              contactCity={contactCity}
              contactCountry={contactCountry}
              contactPhoneNumber={contactPhoneNumber}
              experienceJobTitle={experienceJobTitle}
              experienceCompany={experienceCompany}
              experienceCity={experienceCity}
              experienceCountry={experienceCountry}
              experienceStartDateYear={experienceStartDateYear}
              experienceStartDateMonth={experienceStartDateMonth}
              experienceEndDateYear={experienceEndDateYear}
              experienceEndDateMonth={experienceEndDateMonth}
              experienceJobDescription={experienceJobDescription}
              educationUniversityName={educationUniversityName}
              educationCity={educationCity}
              educationCountry={educationCountry}
              educationDegree={educationDegree}
              educationGraduationDate={educationGraduationDate}
              skillsSkills={skillsSkills}
              summarySummary={summarySummary}
            />
          )}
          {templates === "template2" && (
            <Template2
              contactFullName={contactFullName}
              contactEmail={contactEmail}
              contactStreetAddress={contactStreetAddress}
              contactCity={contactCity}
              contactCountry={contactCountry}
              contactPhoneNumber={contactPhoneNumber}
              experienceJobTitle={experienceJobTitle}
              experienceCompany={experienceCompany}
              experienceCity={experienceCity}
              experienceCountry={experienceCountry}
              experienceStartDateYear={experienceStartDateYear}
              experienceStartDateMonth={experienceStartDateMonth}
              experienceEndDateYear={experienceEndDateYear}
              experienceEndDateMonth={experienceEndDateMonth}
              experienceJobDescription={experienceJobDescription}
              educationUniversityName={educationUniversityName}
              educationCity={educationCity}
              educationCountry={educationCountry}
              educationDegree={educationDegree}
              educationGraduationDate={educationGraduationDate}
              skillsSkills={skillsSkills}
              summarySummary={summarySummary}
            />
          )}
          {templates === "template3" && (
            <Template3
              contactFullName={contactFullName}
              contactEmail={contactEmail}
              contactStreetAddress={contactStreetAddress}
              contactCity={contactCity}
              contactCountry={contactCountry}
              contactPhoneNumber={contactPhoneNumber}
              experienceJobTitle={experienceJobTitle}
              experienceCompany={experienceCompany}
              experienceCity={experienceCity}
              experienceCountry={experienceCountry}
              experienceStartDateYear={experienceStartDateYear}
              experienceStartDateMonth={experienceStartDateMonth}
              experienceEndDateYear={experienceEndDateYear}
              experienceEndDateMonth={experienceEndDateMonth}
              experienceJobDescription={experienceJobDescription}
              educationUniversityName={educationUniversityName}
              educationCity={educationCity}
              educationCountry={educationCountry}
              educationDegree={educationDegree}
              educationGraduationDate={educationGraduationDate}
              skillsSkills={skillsSkills}
              summarySummary={summarySummary}
            />
          )}
          {templates === "template4" && (
            <Template4
              contactFullName={contactFullName}
              contactEmail={contactEmail}
              contactStreetAddress={contactStreetAddress}
              contactCity={contactCity}
              contactCountry={contactCountry}
              contactPhoneNumber={contactPhoneNumber}
              experienceJobTitle={experienceJobTitle}
              experienceCompany={experienceCompany}
              experienceCity={experienceCity}
              experienceCountry={experienceCountry}
              experienceStartDateYear={experienceStartDateYear}
              experienceStartDateMonth={experienceStartDateMonth}
              experienceEndDateYear={experienceEndDateYear}
              experienceEndDateMonth={experienceEndDateMonth}
              experienceJobDescription={experienceJobDescription}
              educationUniversityName={educationUniversityName}
              educationCity={educationCity}
              educationCountry={educationCountry}
              educationDegree={educationDegree}
              educationGraduationDate={educationGraduationDate}
              skillsSkills={skillsSkills}
              summarySummary={summarySummary}
            />
          )}
        </div>
      </div>
      <div className="yourresume__right-block">
        <div className="yourresume__btnPdf">
          <span onClick={printDocument}>Print</span>
        </div>

        <div className="yourresume__templates">
              <div className="yourresume__template1" onClick={() => onTemplateChange('template1')}>
               
              </div>
              <div className="yourresume__template2" onClick={() => onTemplateChange('template2')}>
               
              </div>
              <div className="yourresume__template3" onClick={() => onTemplateChange('template3')}>
                
              </div>
              <div className="yourresume__template4" onClick={() => onTemplateChange('template4')}>
               
              </div>
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

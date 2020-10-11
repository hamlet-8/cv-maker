import React from "react";
import { connect } from "react-redux";
import { Skills } from "./Skills";
import { setSkills } from "../../store/skills/actions";

const SkillsContainer = (props) => {
  return <Skills skills={props.skills} setSkills={props.setSkills} />;
};

const mapStateToProps = (state) => {
  return {
    skills: state.skills.skills,
  };
};

const mapDispatchToProps = {
  setSkills,
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);

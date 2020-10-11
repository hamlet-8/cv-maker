import React from "react";
import { connect } from "react-redux";
import { Templates } from "./Templates";
import { setTemplate } from "../../store/templates/actions";

const TemplatesContainer = (props) => {
  return <Templates setTemplate={props.setTemplate} />;
};

const mapStateToProps = (state) => {
  return {
    templates: state.templates.template,
  };
};

const mapDispatchToProps = {
  setTemplate,
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesContainer);

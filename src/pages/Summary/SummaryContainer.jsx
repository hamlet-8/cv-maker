import React from "react";
import { connect } from "react-redux";
import { Summary } from "./Summary";
import { setSummary } from "../../store/summary/actions";

const SummaryContainer = (props) => {
  return <Summary summary={props.summary} setSummary={props.setSummary} />;
};

const mapStateToProps = (state) => {
  return {
    summary: state.summary.summary,
  };
};

const mapDispatchToProps = {
  setSummary,
};

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);

import { combineReducers } from "redux";
import { contactReducer } from "./contact/reducers";
import { experienceReducer } from "./experience/reducers";
import { educationReducer } from "./education/reducers";
import { skillsReducer } from "./skills/reducers";
import { summaryReducer } from "./summary/reducers";
import { templatesReducer } from "./templates/reducers";

export default combineReducers({
  contact: contactReducer,
  experience: experienceReducer,
  education: educationReducer,
  skills: skillsReducer,
  summary: summaryReducer,
  templates: templatesReducer,
});

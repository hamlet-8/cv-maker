import { SKILLS_CHANGE_AREA } from "./actions";

const defaultState = {
  skills: "",
};
// skills: "HTML, CSS, JavaScript, PHP, ReactJS, NodeJS, WordPress, Figma, Photoshop, Git, GitHub, GitLab, npm, yarn",

export const skillsReducer = (state = defaultState, action) => {
  // console.log(state);
  switch (action.type) {
    case SKILLS_CHANGE_AREA:
      return {
        ...state,
        skills: action.payload,
      };

    default:
      return state;
  }
};

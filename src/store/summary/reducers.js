import { SUMMARY_CHANGE_AREA } from "./actions";

const defaultState = {
  summary: "A summary is a brief statement or restatement of main points, especially as a conclusion to a work: a summary of a chapter. A brief is a detailed outline, by heads and subheads, of a discourse (usually legal) to be completed: a brief for an argument.",
};
// summary: "",

// summary: "A summary is a brief statement or restatement of main points, especially as a conclusion to a work: a summary of a chapter. A brief is a detailed outline, by heads and subheads, of a discourse (usually legal) to be completed: a brief for an argument.",
export const summaryReducer = (state = defaultState, action) => {
  // console.log(state);
  switch (action.type) {
    case SUMMARY_CHANGE_AREA:
      return {
        ...state,
        summary: action.payload,
      };

    default:
      return state;
  }
};

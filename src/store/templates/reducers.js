import { TEMPLATE } from "./actions";

const defaultState = {
  summary: "",
};

export const templatesReducer = (state = defaultState, action) => {
  // console.log(state)
  switch (action.type) {
    case TEMPLATE:
      return {
        ...state,
        template: action.payload,
      };
    default:
      return {...state};
  }
};

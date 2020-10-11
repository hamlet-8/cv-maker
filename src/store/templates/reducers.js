import { TEMPLATE } from "./actions";

export const templatesReducer = (state = "", action) => {
  console.log(state)
  switch (action.type) {
    case TEMPLATE:
      return {
        ...state,
        template: action.payload,
      };
    default:
      return state;
  }
};

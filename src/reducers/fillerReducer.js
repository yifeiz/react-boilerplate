import { FILLER_ACTION } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FILLER_ACTION:
    default:
      return state;
  }
};

import { SET_CATEGORIES } from "../constants";

export const categories = (state = [], action) => {
  // {type: SET_RESOURCES, payload: resources??? }

  switch (action.type) {
    case SET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

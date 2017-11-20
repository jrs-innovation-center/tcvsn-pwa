import { SET_CATEGORIES, SET_CURRENT_CATEGORY } from "../constants";

export const categories = (state = [], action) => {
  // {type: SET_RESOURCES, payload: resources??? }

  switch (action.type) {
    case SET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

export const category = (state = [], action) => {
  // {type: SET_RESOURCES, payload: resources??? }

  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

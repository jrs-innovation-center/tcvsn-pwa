import fetch from "isomorphic-fetch";
import { SET_CATEGORIES } from "../constants";

export const setCategories = async (dispatch, getState) => {
  const response = await fetch("http://localhost:5000/categories").then(res =>
    res.json()
  );
  console.log("fetch response", response);
  dispatch({ type: SET_CATEGORIES, payload: response });
};

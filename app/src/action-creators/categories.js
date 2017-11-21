import fetch from "isomorphic-fetch";
import { SET_CATEGORIES, SET_CURRENT_CATEGORY } from "../constants";

export const setCategories = async (dispatch, getState) => {
  const response = await fetch("http://localhost:5000/categories").then(res =>
    res.json()
  );
  dispatch({ type: SET_CATEGORIES, payload: response });
};

export const setCurrentCategory = id => async (dispatch, getState) => {
  const response = await fetch(`http://localhost:5000/categories/${id}`).then(
    res => res.json()
  );
  dispatch({ type: SET_CURRENT_CATEGORY, payload: response });
};

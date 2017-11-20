import { createStore, combineReducers, applyMiddleware } from "redux";
import { drawer } from "./reducers/drawer";
import { resources } from "./reducers/resources";
import { categories, category } from "./reducers/categories";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({ drawer, categories, resources, category }),
  applyMiddleware(thunk)
);

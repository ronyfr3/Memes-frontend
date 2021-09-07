import { combineReducers } from "redux";
import { MemeReducer } from "./reducer";

export const reducers = combineReducers({
  Memes: MemeReducer,
});

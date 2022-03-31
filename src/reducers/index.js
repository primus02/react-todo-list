import { counterReducer } from "./counterReducer";
import { logReducer } from "./logReducer";
import { combineReducers } from "redux";

const combinedReducers= combineReducers({counterReducer, logReducer});

export default combinedReducers;
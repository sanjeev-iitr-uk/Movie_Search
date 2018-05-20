import { combineReducers } from "redux";
import MovieReducer from "./reducer_movie";

const rootReducer = combineReducers({
  moviesData: MovieReducer
});

export default rootReducer;

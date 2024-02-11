import { combineReducers } from "redux";
import { mainApi } from "../api";



const rootReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,
});

export default rootReducer;

// import combineReducers for adding mutible reducers to the store (if needed)
import { combineReducers } from "redux";
// import reducers
import itemReducer from "./itemReducer";

//give the reducer a name so it can be referenced
const rootReducer = combineReducers({
  data: itemReducer,
});

export default rootReducer;

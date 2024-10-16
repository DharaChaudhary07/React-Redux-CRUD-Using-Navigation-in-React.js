import { combineReducers } from "redux";
import employeReducer from "./employeReducer";


const rootReducer = combineReducers({
    employeReducer ,
});

export default rootReducer;
import { combineReducers } from "redux";

import user from './user/reducer';
import employees from './employees/reducer';


export default combineReducers({
    user,
    employees
});
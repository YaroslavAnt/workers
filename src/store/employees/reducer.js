import * as actionTypes from "./types";

const initialState = {
  employees: [],
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_ALL:
      return {
        ...state,
        employees: action.employees
      };

    case actionTypes.RECEIVE_MSG:
      return {
        ...state,
        message: action.message
      };

    case actionTypes.CONFIRM_MSG:
      return {
        ...state,
        message: ''
      };

    default:
      return state;
  }
};
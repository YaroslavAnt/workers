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


    case actionTypes.CREATE:
      return {
        ...state,
        message: action.message
      };

    case actionTypes.UPDATE:
      return {
        ...state,
        message: action.message
      };

    case actionTypes.DELETE:
      return {
        ...state,
        message: action.message
      };

    default:
      return state;
  }
};
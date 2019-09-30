import * as actionTypes from "./types";

const initialState = {
    token: '',
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SIGNUP:
            return {
                ...state,
                message: action.message
            };


        case actionTypes.LOGIN:
            return {
                ...state,
                token: action.token
            };

        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                message: action.message
            };

        case actionTypes.AUTH_LOGOUT:
            return {
                token: '',
                message: ''
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
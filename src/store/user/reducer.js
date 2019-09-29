import * as actionTypes from "./types";

const initialState = {
    userId: '',
    token: '',
    errMessage: ''
};

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SIGNUP:
            return {
                ...state,
                userId: action.userId
            };


        case actionTypes.LOGIN:
            return {
                ...state,
                token: action.token
            };

        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                errMessage: action.errMessage
            };

        case actionTypes.AUTH_LOGOUT:
            return {
                token: '',
                errMessage: ''
            };

        default:
            return state;
    }
};
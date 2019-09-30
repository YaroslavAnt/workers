import * as actionTypes from './types'
import axios from "axios";

const url = 'http://localhost:5000/api/users';

export const signup = (user) => {
    return dispatch => {
        axios
            .post(`${url}/signup`, user)
            .then(response => {
                const { data: { msg } } = response
                console.log(response);
                dispatch(signupSuccess(msg))
            })
            .catch(err => {
                dispatch(authFail(err.message));
            });
    }
}

export const signupSuccess = (message) => {
    return {
        type: actionTypes.SIGNUP,
        message
    };
};




export const login = (user) => {
    return dispatch => {
        axios
            .post(`${url}/login`, user)
            .then(res => {
                console.log({ res })
                const { token, _id } = res.data;
                dispatch(loginSuccess(token, _id));
            })
            .catch(err => {
                console.log({ err })
                dispatch(authFail(err.message));
            });
    };
};

export const loginSuccess = (token) => {
    return {
        type: actionTypes.LOGIN,
        token,
    };
};

export const authFail = (message) => {
    return {
        type: actionTypes.AUTH_FAIL,
        message
    };
};

export const confirmMsg = () => {
    return {
        type: actionTypes.CONFIRM_MSG,
    };
};
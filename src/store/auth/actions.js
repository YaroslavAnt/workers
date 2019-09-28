import * as actionTypes from './types'
import axios from "axios";

const url = 'http://localhost:3000/'

export const signIn = (user) => {
    return dispatch => {
        axios
            .post(`${url}/signIn`, user)
            .then(res => {
                const { token, _id } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("userId", _id);
                dispatch(signInSuccess(token, _id));
            })
            .catch(err => {
                dispatch(authFail(err.message));
            });
    };
};

export const signInSuccess = (token, userId) => {
    return {
        type: actionTypes.SIGNIN_SUCCESS,
        token,
        userId
    };
};

export const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        err
    };
};
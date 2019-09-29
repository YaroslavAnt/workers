import * as actionTypes from './types'
import axios from "axios";

const url = 'http://localhost:5000/api/employees';

export const getAll = (user) => {
    return dispatch => {
        axios
            .get(`${url}`, user)
            .then(response => {
                // const { data: { msg, user } } = response
                console.log(response);
                dispatch(getAllSuccess(user._id))
            })
            .catch(err => {
                dispatch(fail(err.message));
            });
    }
}

export const getAllSuccess = (employees) => {
    return {
        type: actionTypes.GET_ALL,
        employees
    };
};




export const create = (employee) => {
    return dispatch => {
        axios
            .post(`${url}`, employee)
            .then(res => {
                console.log({ res })
                // const { token, _id } = res.data;
                // dispatch(createSuccess(token, _id));
                dispatch(getAllSuccess())
            })
            .catch(err => {
                console.log({ err })
                dispatch(fail(err.message));
            });
    };
};

export const createSuccess = (token) => {
    return {
        type: actionTypes.CREATE,
        token,
    };
};


export const update = (newData, employeeId) => {
    return dispatch => {
        axios
            .put(`${url}/${employeeId}`, newData)
            .then(res => {
                console.log({ res })
                // const { token, _id } = res.data;
                // dispatch(createSuccess(token, _id));
                dispatch(getAllSuccess())
            })
            .catch(err => {
                console.log({ err })
                dispatch(fail(err.message));
            });
    };
};

export const updateSuccess = (message) => {
    return {
        type: actionTypes.UPDATE,
        message,
    };
};

export const deleteEmployee = (employeeId) => {
    return dispatch => {
        axios
            .put(`${url}/${employeeId}`)
            .then(res => {
                console.log({ res })
                // const { token, _id } = res.data;
                // dispatch(createSuccess(token, _id));
                dispatch(getAllSuccess())
            })
            .catch(err => {
                console.log({ err })
                dispatch(fail(err.message));
            });
    };
};

export const deleteSuccess = (message) => {
    return {
        type: actionTypes.DELETE,
        message,
    };
};

export const fail = (err) => {
    return {
        type: actionTypes.FAIL,
        err
    };
};
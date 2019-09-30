import * as actionTypes from './types'
import axios from "axios";

const url = 'http://localhost:5000/api/employees';

export const getAll = (user) => {
    return dispatch => {
        axios
            .get(`${url}`, user)
            .then(response => {
                const { data: { employees } } = response
                console.log(response);
                dispatch(getAllSuccess(employees))
            })
            .catch(err => {
                dispatch(receiveMessage(err.message));
            });
    }
}

export const create = (employee) => {
    return dispatch => {
        axios
            .post(`${url}`, employee)
            .then(res => {
                console.log({ res })
                const { data: { msg } } = res;
                dispatch(receiveMessage(msg));
            })
            .catch(err => {
                console.log({ err })
                dispatch(receiveMessage(err.message));
            });
    };
};

export const update = (newData, employeeId) => {
    return dispatch => {
        console.log(employeeId)
        axios
            .put(`${url}/${employeeId}`, newData)
            .then(res => {
                console.log({ res })
                const { msg } = res.data;
                dispatch(receiveMessage(msg));
            })
            .catch(err => {
                console.log({ err })
                dispatch(receiveMessage(err.message));
            });
    };
};

export const deleteEmployee = (employeeId) => {
    return dispatch => {
        axios
            .delete(`${url}/${employeeId}`)
            .then(res => {
                console.log({ res })
                const { msg } = res.data;
                dispatch(receiveMessage(msg));
            })
            .catch(err => {
                console.log({ err })
                dispatch(receiveMessage(err.message));
            });
    };
};



export const getAllSuccess = (employees) => {
    return {
        type: actionTypes.GET_ALL,
        employees
    };
};

export const receiveMessage = (message) => {
    return {
        type: actionTypes.RECEIVE_MSG,
        message,
    };
};

export const confirmMsg = () => {
    return {
        type: actionTypes.CONFIRM_MSG
    }
}
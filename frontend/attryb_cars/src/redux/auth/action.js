import axios from "axios"
import { USER_ADD_FAILURE, USER_ADD_REQUEST, USER_ADD_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionTypes"


const loginRequestAction = () => {
    return {type:USER_LOGIN_REQUEST}
}
const loginSuccessAction = (payload) => {
    return {type:USER_LOGIN_SUCCESS,payload}
}
const loginFailureAction = () => {
    return {type:USER_LOGIN_FAILURE}
}

const addRequestAction = () => {
    return {type:USER_ADD_REQUEST}
}
const addSuccessAction = (payload) => {
    return {type:USER_ADD_SUCCESS,payload}
}
const addFailureAction = () => {
    return {type:USER_ADD_FAILURE}
}

export const login = (userData) => (dispatch) => {
    dispatch(loginRequestAction());
    return axios.post("https://lime-combative-scorpion.cyclic.app/users/userLogin",userData).then((res)=>{
        dispatch(loginSuccessAction(res.data.token))
    }).catch((error)=>{                     
        dispatch(loginFailureAction())
    })
}

export const register = (userData) => (dispatch) => {
    dispatch(addRequestAction());
    return axios.post("https://lime-combative-scorpion.cyclic.app/users/addUser",userData).then((res)=>{
        dispatch(addSuccessAction(res.data))
    }).catch((error)=>{                     
        dispatch(addFailureAction())
    })
}
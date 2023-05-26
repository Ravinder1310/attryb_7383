import axios from "axios"
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionTypes"


const loginRequestAction = () => {
    return {type:USER_LOGIN_REQUEST}
}
const loginSuccessAction = (payload) => {
    return {type:USER_LOGIN_SUCCESS,payload}
}
const loginFailureAction = () => {
    return {type:USER_LOGIN_FAILURE}
}

export const login = (userData) => (dispatch) => {
    dispatch(loginRequestAction());
    return axios.post("https://reqres.in/api/login",userData).then((res)=>{
        dispatch(loginSuccessAction(res.data.token))
    }).catch((error)=>{                     
        dispatch(loginFailureAction())
    })
}
import { EDIT_CAR_SUCCESS, GET_CAR_FAILURE, GET_CAR_REQUEST, GET_CAR_SUCCESS } from "./actionTypes"
import axios from "axios"


const getCarRequestAction = () => {
    return {type:GET_CAR_REQUEST};
}
const getCarSuccessAction = (payload) => {
    return {type:GET_CAR_SUCCESS,payload};
}
const getCarFailureAction = () => {
    return {type:GET_CAR_FAILURE};
}


export const getCars =(params={}) => (dispatch) => {
    dispatch(getCarRequestAction());

    axios.get(`https://lime-combative-scorpion.cyclic.app/admin`,params).then((res)=>{
        dispatch(getCarSuccessAction(res.data))
    }).catch((error)=>{
        dispatch(getCarFailureAction(error))
    })
}


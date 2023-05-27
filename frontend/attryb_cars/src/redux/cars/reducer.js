import {  GET_CAR_FAILURE, GET_CAR_REQUEST, GET_CAR_SUCCESS } from "./actionTypes";


const initialState = {
    cars:[],
    isLoading:false,
    isError:false,
}

export const reducer=(state=initialState,{type,payload})=>{
 switch(type){
    case GET_CAR_REQUEST:
        return {...state,isLoading:true};
    case GET_CAR_SUCCESS:
        return {...state,isLoading:false,cars:payload}
    case GET_CAR_FAILURE:
        return {...state,isError:true}
    default :
        return state;
 }
}

import {  GET_CAR_FAILURE, GET_CAR_REQUEST, GET_CAR_SUCCESS } from "./actionTypes";


const initialState = {
    books:[],
    isLoading:false,
    isError:false,
}

export const reducer=(state=initialState,{type,payload})=>{
 switch(type){
    case GET_CAR_REQUEST:
        return {...state,isLoading:true};
    case GET_CAR_SUCCESS:
        return {...state,isLoading:false,books:payload}
    case GET_CAR_FAILURE:
        return {...state,isError:true}
    default :
        return state;
 }
}

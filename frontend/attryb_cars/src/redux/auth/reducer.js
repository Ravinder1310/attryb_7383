import { USER_ADD_FAILURE, USER_ADD_REQUEST, USER_ADD_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionTypes"

let initialState = {
    cars:[],
    isAuth : false,
    token : '',
    isLoading : false,
    isError : false
}

export const reducer = (state=initialState,{type,payload}) => {
   switch(type){
    case USER_LOGIN_REQUEST:
        return {...state,isLoading:true}
    case USER_LOGIN_SUCCESS:
        return {...state,isLoading:false,isAuth:true,token:payload}
    case USER_LOGIN_FAILURE:
        return {...state,isLoading:false,isError:true} 
    case USER_ADD_REQUEST:
        return {...state,isLoading:true}
    case USER_ADD_SUCCESS:
        return {...state,isLoading:false,cars:payload}
    case USER_ADD_FAILURE:
        return {...state,isLoading:false,isError:true} 
    default :
    return state
   }
}
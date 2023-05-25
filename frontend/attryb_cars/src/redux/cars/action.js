import { GET_CAR_REQUEST } from "./actionTypes"
import axios from "axios"


const getCarData = () => (dispatch) =>{
   dispatch({type:GET_CAR_REQUEST})
   axios.get("https://ravi-server.onrender.com/todos")
}
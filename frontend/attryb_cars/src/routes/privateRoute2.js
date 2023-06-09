import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute2 = ({children}) => {
    const location = useLocation();
    // console.log(location);
    const isAuth = useSelector((store)=>store.authReducer.isAuth)
   if(!isAuth){
    alert("Login first")
    return <Navigate to={'/login'} state={location.pathname} replace/>
   }
   alert("Login successfully")
   return children
}
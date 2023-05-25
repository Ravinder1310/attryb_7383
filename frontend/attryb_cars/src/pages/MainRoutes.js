import {Routes,Route} from "react-router-dom"
import { SignIn } from "./signIn"
import { SignUp } from "./signUp"

export const MainRoutes = () => {
    return (
        <Routes>
           <Route path="/" element={<SignIn/>}/>
           <Route path="/register" element={<SignUp/>}/>
        </Routes>
    )
}
// import {image} from ".../images/car1.png"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "../styles/signUp.css"
import { register } from "../redux/auth/action"
import { useDispatch } from "react-redux"
import { useState } from "react"

export const SignUp = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleLogin = () => {
        let userData = {
          name,
          email,
          password
        }
        dispatch(register(userData)).then(()=>{
          navigate("/");
        })
      }

    return (
        <div id="sign">
            <img src="https://media.gettyimages.com/id/615534878/photo/used-car-dealership-forecourt-2009-artist-unknown.jpg?s=612x612&w=0&k=20&c=e30hBgECWSAcX4VMX-bYQ8Etp0s1iYMpc2J4FKmhIpk="></img>
            <div id="register">
            <Link to={"/"}>
                <img id="logImg" src="https://media.tenor.com/ajdm0sdAHbsAAAAj/munko-davidchoe.gif"/>
                </Link>
               <h1 id="txt2">Register</h1>
               <input id="inpt5" type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
               <input id="inpt3" type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
               <input id="inpt4" type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
               <button id="btn2" onClick={handleLogin}>SignUp</button>
               <p id="dont">Already have an account?  <a href="login" id="create"> Login</a></p>
            </div>
        </div>
    )
}
// import {image} from ".../images/car1.png"
import { Link } from "react-router-dom"
import "../styles/signUp.css"

export const SignUp = () => {
    return (
        <div id="sign">
            <img src="https://media.gettyimages.com/id/615534878/photo/used-car-dealership-forecourt-2009-artist-unknown.jpg?s=612x612&w=0&k=20&c=e30hBgECWSAcX4VMX-bYQ8Etp0s1iYMpc2J4FKmhIpk="></img>
            <div id="register">
            <Link to={"/"}>
                <img id="logImg" src="https://media.tenor.com/ajdm0sdAHbsAAAAj/munko-davidchoe.gif"/>
                </Link>
               <h1 id="txt2">Register</h1>
               <input id="inpt5" type="text" placeholder="Enter your name"/>
               <input id="inpt3" type="email" placeholder="Enter email"/><br/>
               <input id="inpt4" type="password" placeholder="Enter password"/><br/>
               <button id="btn2">SignUp</button>
               <p id="dont">Already have an account?  <a href="login" id="create"> Login</a></p>
            </div>
        </div>
    )
}
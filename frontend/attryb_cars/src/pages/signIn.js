// import {image} from ".../images/car1.png"
import { Link } from "react-router-dom"
import "../styles/signIn.css"

export const SignIn = () => {
    return (
        <div id="log">
            <img src="https://media.gettyimages.com/id/488511160/photo/dad-buying-a-second-hand-car-for-his-daughter.jpg?s=612x612&w=0&k=20&c=jue-e04XNc2Tx9aZ-2R54_roLge8eJKRSuQ4_DCMgOo="></img>
            <div id="login">
                <Link to={"/"}>
                <img id="logImg" src="https://media.tenor.com/ajdm0sdAHbsAAAAj/munko-davidchoe.gif"/>
                </Link> 
               <h1 id="txt1">Login</h1>
               <input id="inpt1" type="email" placeholder="Enter registered email"/><br/>
               <input id="inpt2" type="password" placeholder="Enter password"/><br/>
               <a href="#" id="forget">Forgot password ?</a><br/>
               <button id="btn1">Login</button>
               <p id="dont">Don't have any account?  <a href="/register" id="create"> Create account</a></p>
            </div>
        </div>
    )
}
// import {image} from ".../images/car1.png"
import "../styles/signIn.css"

export const SignIn = () => {
    return (
        <div>
            {/* <img src="./images/car1.png"></img> */}
            <div id="login">
               <h1 id="txt1">Login</h1>
               <input id="inpt1" type="email" placeholder="Enter registered email"/><br/>
               <input id="inpt2" type="password" placeholder="Enter password"/><br/>
               <a href="#" id="forget">Forgot password ?</a><br/>
               <button id="btn1">Login</button>
               <p id="dont">Don't have any account?  <a href="#" id="create"> Create account</a></p>
            </div>
        </div>
    )
}
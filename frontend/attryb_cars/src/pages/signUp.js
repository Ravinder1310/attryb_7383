// import {image} from ".../images/car1.png"
import "../styles/signUp.css"

export const SignUp = () => {
    return (
        <div>
            {/* <img src="./images/car1.png"></img> */}
            <div id="register">
               <h1 id="txt2">Register</h1>
               <input id="inpt5" type="text" placeholder="Enter your name"/>
               <input id="inpt3" type="email" placeholder="Enter email"/><br/>
               <input id="inpt4" type="password" placeholder="Enter password"/><br/>
               <button id="btn2">SignUp</button>
               <p id="dont">Already have an account?  <a href="#" id="create"> Login</a></p>
            </div>
        </div>
    )
}
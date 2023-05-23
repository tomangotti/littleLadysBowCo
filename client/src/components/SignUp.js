import { useState } from "react"

function SignUp(){
    const [signIn, setSignIn] = useState(true) 


    function handleClick(){
        setSignIn(!signIn)
    }


    return(
        <>
        <button onClick={handleClick}>{signIn ? "create an account" : "log in"}</button><br></br>
        {signIn ? <div className="signIn">
            <form>
                <label>Email</label>
                <input type="text" name="email" />
                <label>Password</label>
                <input type="password" name="password" />
            </form>
        </div> : 
        <div className="signup">
            <form>
                <label>First Name</label>
                <input type="text" name="fname"/>
                <label>Last Name</label>
                <input type="text" name="lname"/>
                <label>Email</label>
                <input type="text" name="email"/>
                <label>Address</label>
                <input type="text" name="address"/>
                <label>City</label>
                <input type="text" name="city"/>
                <label>state</label>
                <input type="text" name="state"/>
                <label>Zip Code</label>
                <input type="integer" name="zipCode"/>
                <label>Password</label>
                <input type="password" name="password"/>
                <label>Password Confirmation</label>
                <input type="password" name="passwordConfirmation"/>
                <button>Sign Up</button>
            </form>
        </div>}
    </>)
}

export default SignUp
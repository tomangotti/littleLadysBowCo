import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp({setUser, user}){
    const [signIn, setSignIn] = useState(true) 
    const navigate = useNavigate()

    function handleClick(){
        setSignIn(!signIn)
    }

    function handleCreateAccount(e){
        e.preventDefault()

        const accountInfo = {
            fname: e.target.fname.value,
            lname: e.target.lname.value,
            email: e.target.email.value,
            address: e.target.address.value,
            city: e.target.city.value,
            state: e.target.state.value,
            zipCode: e.target.zipCode.value,
            password: e.target.password.value,
            password_confirmation: e.target.passwordConfirmation.value,
        }

        fetch('/users',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(accountInfo)
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setUser(data)
                    e.target.reset()
                    navigate('/')
                })
            }
        })
        
    }

    function handleLogin(e){
        e.preventDefault()

        const loginInfo = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        fetch('/login',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginInfo)
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setUser(data)
                    e.target.reset()
                    navigate('/')
                })
            }
        })
    }


    return(
        <div className="formCard">
        
        {signIn ? <div className="signIn">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <label>Email: </label>
                <input type="text" name="email" /><br></br>
                <label>Password: </label>
                <input type="password" name="password" /><br></br>
                <button>Log in</button>
            </form>
        </div> : 
        <div className="signup">
            <form onSubmit={handleCreateAccount}>
                <h1>Create an Account</h1>
                <label>First Name: </label>
                <input type="text" name="fname"/><br></br>
                <label>Last Name: </label>
                <input type="text" name="lname"/><br></br>
                <label>Email: </label>
                <input type="text" name="email"/><br></br>
                <label>Address: </label>
                <input type="text" name="address"/><br></br>
                <label>City: </label>
                <input type="text" name="city"/><br></br>
                <label>State: </label>
                <input type="text" name="state"/><br></br>
                <label>Zip Code: </label>
                <input type="integer" name="zipCode"/><br></br>
                <label>Password: </label>
                <input type="password" name="password"/><br></br>
                <label>Password Confirmation: </label>
                <input type="password" name="passwordConfirmation"/><br></br>
                <button>Sign Up</button>
            </form>
        </div>}
        <button onClick={handleClick}>{signIn ? "create an account" : "Already have an account?"}</button><br></br>
    </div>)
}

export default SignUp
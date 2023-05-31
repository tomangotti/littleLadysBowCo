import { useNavigate } from "react-router-dom"


function AdminLogin({setAdmin, admin}){
    const navigate = useNavigate()


    function handleAdminLogin(e){
        e.preventDefault()

        const loginInfo = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        fetch('/admin_login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginInfo)
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setAdmin(data)
                    navigate('/admin_page/editBows')
                })
            }
        })
        
    }


    return(<>
        <div className="formCard">
            <h1>Admin Login</h1>
            <form onSubmit={handleAdminLogin}>
                <label>Email</label>
                <input type="text" name="email"/><br></br>
                <label>Pasword</label>
                <input type="password" name="password"/><br></br>
                <button>Login</button>
            </form>
        </div>
    </>)
}

export default AdminLogin
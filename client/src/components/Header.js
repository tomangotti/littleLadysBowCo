import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Header({user, setUser}){
    const [headerLogo, setHeaderLogo] = useState(null)
    const [menuVis, setMenuVis] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/logoLatest')
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setHeaderLogo(data)
                })
            }
        })
        
    }, [])

    function handleMenu(){
        setMenuVis(!menuVis)
    }

    function handleLogin(){
        navigate('/sign_up')
    }

    function handleLogOut(){
        fetch('/logout', {
            method: "DELETE"
        })
        .then(setUser(null))
        .then(navigate('/sign_up'))
    }

    return(
    <>
        <div className="header">
                {headerLogo ? <img src={headerLogo.photo} /> : null}
        </div>
        <div className="navbar">
            <button onClick={handleMenu}>☰</button>
            <button id="cartEmoji">🛒</button>
            <div className={menuVis ? "menu" : "hidden"}>
                <NavLink to='/'><h4>- Bows</h4></NavLink>
                <NavLink to='/about_us'><h4>- About us</h4></NavLink>
                <NavLink to='/contact'><h4>- Contact</h4></NavLink>
                {user ? <h4 onClick={handleLogOut}>- Log out</h4> : <h4 onClick={handleLogin}>- Login/Sign up</h4>}
                <h4>- Account</h4>
            </div>
        </div>
        
    </>
    )
}

export default Header
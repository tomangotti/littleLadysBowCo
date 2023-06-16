import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Header({user, setUser}){
    const [headerLogo, setHeaderLogo] = useState(null)
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

    function handleCart(){
        navigate('/cart')
    }

    function handleContact(){
        navigate('/contact')
    }

    function handleAccount(){
        navigate('/account')
    }

    function handleHome(){
        navigate('/')
    }

    return(
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{headerLogo ? <img src={headerLogo.photo} /> : null}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" onClick={handleHome}>Bows</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" onClick={handleCart}>Cart 🛒</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" onClick={handleAccount}>Account</a>
                    </li>
                    <li class="nav-item">
                    {user ? <a class="nav-link" onClick={handleLogOut}>Log out</a> : <a class="nav-link" onClick={handleLogin}>Login/Sign up</a>}
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Learn More
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">About us</a></li>
                        <li><a class="dropdown-item" onClick={handleContact}>Contact</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Custom Orders</a></li>
                    </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Header
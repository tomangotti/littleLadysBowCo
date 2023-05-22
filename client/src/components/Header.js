import { useEffect, useState } from "react"


function Header(){
    const [headerLogo, setHeaderLogo] = useState(null)

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

    return(
    <>
        <div className="header">
                {headerLogo ? <img src={headerLogo.photo} /> : null}
        </div>
        <div className="navbar">
            <div className="login">
                <h4>Bows</h4>
                <h4>About us</h4>
                <h4>Contact</h4>
                <h4>Account</h4>
            </div>
        </div>
        
    </>
    )
}

export default Header
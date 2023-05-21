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
            <h1>Little Lady's Bow CO.</h1>
        </div>
    </>
    )
}

export default Header
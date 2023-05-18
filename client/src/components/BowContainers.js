import { useEffect, useState } from "react"
import BowCard from "./BowCard"


function BowContainer(){
    const [bows, setBows] = useState(null)

    // initial fetch to load bows
    useEffect(() => {
        fetch('/bows')
        .then((r) => {
            if(r.ok){
                r.json().then((data) =>{
                    setBows(data)
                })
            }
        })
    },[])

    if(bows === null){
        return <h1>Loading</h1>
    }

    const bowList = bows.map((bow) => {
        return <BowCard key={bow.id} bow={bow}/>;
    })

    return(<>
        <div className="">
            {bowList}
        </div>
    </>)
}

export default BowContainer
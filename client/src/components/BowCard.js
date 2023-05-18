import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BowCard({bow}){
    const navigate = useNavigate()
    

    function handleClick(){
        navigate(`/bows/${bow.id}`)
    }


    return(
    <div className="bowCard" onClick={handleClick}>
        <img src={bow.photo}/>
        <h3>{bow.name}</h3>
        <h6>Price: ${bow.price}</h6>
        {bow.quantity ? <h6>In Stock</h6> : <h6>Out of Stock</h6>}
    </div>)
}

export default BowCard
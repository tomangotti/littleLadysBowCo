import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BowPage(){
    const {id} = useParams()
    const [bow, setBow] = useState(null)


    useEffect(() =>{
        fetch(`/bows/${id}`)
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setBow(data)
                })
            }
        })
    },[])

    if(bow === null){
        return <h1>Loading</h1>
    }

    const maxQuantity = []
        
    for(let i = 0; i < bow.quantity; i++) {
        maxQuantity.push(<option>{i}</option>)
    }
        
    

    return(
    <div className="bowPage">
        <img src={bow.photo}/>
        <div className="bowPageData">
            <h3>{bow.name}</h3>
            <h4>{bow.description}</h4>
            <h5>Price: ${bow.price}</h5>
            {bow.quantity ? <h6>In Stock</h6> : <h6>Out of Stock</h6>}
            <form>
                <label>Quantity</label>
                <select>
                    <option value="0">0</option>
                    {maxQuantity}
                </select><br></br>
                <button>Add to Cart</button>
            </form>
        </div>
    </div>)
}

export default BowPage
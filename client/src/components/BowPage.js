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
    if(bow.quantity > 5){
        for(let i = 0; i <= 5; i++) {
            maxQuantity.push(<option>{i}</option>)
        }
    }else{    
        for(let i = 0; i <= bow.quantity; i++) {
            maxQuantity.push(<option>{i}</option>)
        }
    }

    
        
    

    return(
    <div className="bowPage">
        <img src={bow.photo}/>
        <div className="bowPageData">
            <h2>{bow.name}</h2>
            <h4>{bow.description}</h4>
            <h5>Price: ${bow.price}</h5>
            {bow.quantity ? <form>
                <label>Quantity</label>
                <select>
                    {maxQuantity}
                </select><br></br>
                <button>Add to Cart</button>
            </form> : <div><h6>Out of Stock</h6><button>request</button></div>}
            
        </div>
    </div>)
}

export default BowPage
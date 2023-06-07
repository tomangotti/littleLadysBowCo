import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BowPage({user}){
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

    function handleAddToCart(e){
        e.preventDefault()

        if(user === null){
            alert("Please login or create an account to add item to cart.")
        }else if(e.target.quantity.value === "0"){
            alert("Please select quantity.")
        }else{
            const cartItem = {
                bow_id: bow.id,
                user_id: user.id,
                quantity: e.target.quantity.value,
            }
            
            fetch('/carts', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(cartItem)
            })
            .then((r) => {
                if(r.ok){
                    r.json().then((data) => {
                        console.log(data)
                        alert("Items added to your cart.")
                    })
                }
            })

        }

        
    }
    
    
    
    return(
    <div className="bowPage">
        <img src={bow.photo}/>
        <div className="bowPageData">
            <h2>{bow.name}</h2>
            <h4>{bow.description}</h4>
            <h5>Price: ${bow.price}</h5>
            {bow.quantity ? <form onSubmit={handleAddToCart}>
                <label>Quantity</label>
                <select name="quantity">
                    {maxQuantity}
                </select><br></br>
                <button>Add to Cart</button>
            </form> : <div><h6>Out of Stock</h6><button>request</button></div>}
        </div>
    </div>)
}

export default BowPage
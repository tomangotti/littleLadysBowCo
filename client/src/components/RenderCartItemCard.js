import { useNavigate } from "react-router-dom";

function RenderCartItemCard({item, removeItem}){
    const navigate = useNavigate()
    const price = item.bow.price * item.quantity;

    const quantity = []
    for(let i=item.quantity; i>0; i--){
        quantity.push(<option>{i}</option>)
    }

    function handleQuantityChange(e){
        const newQuantity = {
            quantity: e.target.value,
            id: item.id,
        }
        
        fetch(`/carts/${item.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newQuantity)
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    console.log(data)
                })
            }
        })
    }

    function handleRemove(){
        fetch(`/carts/${item.id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        .then(removeItem(item.id))
    }

    function handleBowPage(){
        navigate(`/bows/${item.bow.id}`)
    }

    return(
        <div className="cartItem">
            <img src={item.bow.photo} style={{width: "150px"}} onClick={handleBowPage} />
            <h4>{item.bow.name}</h4>
            <form onChange={handleQuantityChange}>
                <label>Quantity: </label>
                <select name="quantity">
                    {quantity}
                </select>
            </form>
            
            <h4>Price: ${price}</h4>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default RenderCartItemCard
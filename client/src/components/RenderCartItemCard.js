
function RenderCartItemCard({item}){
    
    const price = item.bow.price * item.quantity;

    const quantity = []
    for(let i=item.quantity; i>0; i--){
        quantity.push(<option>{i}</option>)
    }

    function handleQuantityChange(e){
        e.preventDefault()
        const newQuantity = {quantity: e.target.value}
        console.log(newQuantity)
    }

    return(
        <div className="cartItem">
            <img src={item.bow.photo} style={{width: "75px"}} />
            <h4>{item.bow.name}</h4>
            <form onChange={handleQuantityChange}>
                <label>Quantity: </label>
                <select name="quantity">
                    {quantity}
                </select>
            </form>
            <button>Remove</button>
            <h4>Price: ${price}</h4>
        </div>
    )
}

export default RenderCartItemCard
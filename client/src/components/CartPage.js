import { useEffect, useState } from "react"


import RenderCartItemCard from "./RenderCartItemCard"

function CartPage({user, cart, setCart}){


    if(user === null){
        return(<div><h1>Please log in</h1></div>)
    }else if(cart === null){
        return(<div><h1>Cart is empty</h1></div>)
    }

    function removeItem(id){
        const removedCart = cart.filter((item) => {
            return item.id !== id
        })
        setCart(removedCart)
    }

    const cartItems = cart.map((item, index) => {
        return(<RenderCartItemCard item={item} key={index} removeItem={removeItem}/>)
    })

    
    let st = 0;

    cart.forEach((item) => {
        let price = item.quantity * item.bow.price
        st += price
    })



        

    return(
    <div>
        <h1>CART</h1>
        {cartItems}
        <h2>Subtotal: ${st}</h2>
    </div>
        )
}

export default CartPage
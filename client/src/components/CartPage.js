import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import RenderCartItemCard from "./RenderCartItemCard"


function CartPage({user, cart, setCart}){
    const navigate = useNavigate()

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
        return(<RenderCartItemCard item={item} key={index} removeItem={removeItem} updateQuantity={updateQuantity} />)
    })

    
    let st = 0;

    cart.forEach((item) => {
        let price = item.quantity * item.bow.price
        st += price
    })

    function updateQuantity(updatedItem, objId){
        const index = cart.findIndex((obj) => obj.id === objId)
        cart[index] = updatedItem
        console.log(cart)
        setCart(cart)
    }

    function handleCheckOut(){
        navigate('/checkout')
    }
        

    return(
    <div>
        <h1>CART</h1>
        {cartItems}
        <h2>Subtotal: ${st}</h2>
        <button onClick={handleCheckOut}>Check Out</button>
    </div>
        )
}

export default CartPage
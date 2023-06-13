import { useEffect } from "react"

function CheckOutPage({user, cart}){
    console.log(user)
    console.log(cart)

    if(cart === null){
        return(<h1>loading</h1>)
    }

    const orderList = cart.map((item) => {
        return (<div><h4>{item.bow.name} -  Quantitiy: {item.quantity}  x  ${item.bow.price}  =  ${item.quantity * item.bow.price}</h4></div>)
    })

    return(
    <div>
        <div>
            <h1>Account Info</h1>
            <h4>Name: {user.fname} {user.lname}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Address: {user.address} {user.city}, {user.state} {user.zipCode}</h4>
            <button>Edit</button>
        </div>
        <div>
            <h1>Shipping Info</h1>
            <h4>Name: {user.fname} {user.lname}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Address: {user.address} {user.city}, {user.state} {user.zipCode}</h4>
            <button>Edit</button>
        </div>
        <div>
            <h1>Order</h1>
            {orderList}
        </div>

        <button>Submit</button>
    </div>)
}

export default CheckOutPage
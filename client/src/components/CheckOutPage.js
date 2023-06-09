import { useEffect } from "react"

function CheckOutPage({user, cart}){
    console.log(user)
    console.log(cart)

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
            
        </div>

        
    </div>)
}

export default CheckOutPage
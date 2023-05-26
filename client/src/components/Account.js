import { useState } from "react"

function Account({user, setUser}){
    const [editInfo, setEditInfo] = useState(true)


    if(user === null){
        return(<div><h1>Please Login or Create an Account</h1></div>)
    }

    function handleEdit(){
        setEditInfo(!editInfo)
    }

    function handleEditForm(e){
        e.preventDefault()

        const updatedInfo = {
            fname: e.target.fname.value,
            lname: e.target.lname.value,
            email: e.target.email.value,
            address: e.target.address.value,
            city: e.target.city.value,
            state: e.target.state.value,
            zipCode: e.target.zipCode.value,
        }

        fetch(`/users/${user.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedInfo)
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setUser(data)
                    setEditInfo(!editInfo)
                })
            }
        })
    }

    return(
        <div className="accountPage">
            <h1>ACCOUNT INFORMATION</h1>
            {editInfo ? <div className="accountInfo">
                <h5>Name: {user.fname} {user.lname}</h5>
                <h5>Email: {user.email}</h5>
                <h5>Address: {user.address}, {user.city}, {user.state} {user.zipCode}</h5>
                <button onClick={handleEdit}>Edit</button>
            </div> : <div>
                <form onSubmit={handleEditForm}>
                    <label>First Name</label>
                    <input type="text" name="fname" defaultValue={user.fname}/><br></br>
                    <label>Last Name</label>
                    <input type="text" name="lname" defaultValue={user.lname}/><br></br>
                    <label>Email</label>
                    <input type="text" name="email" defaultValue={user.email}/><br></br>
                    <label>Address</label>
                    <input type="text" name="address" defaultValue={user.address}/><br></br>
                    <label>City</label>
                    <input type="text" name="city" defaultValue={user.city}/><br></br>
                    <label>State</label>
                    <input type="text" name="state" defaultValue={user.state}/><br></br>
                    <label>ZipCode</label>
                    <input type="integer" name="zipCode" defaultValue={user.zipCode}/><br></br>
                    <button>Save</button>
                </form>
                <button onClick={handleEdit}>Cancel</button></div>}
            <h1>Orders</h1>
            <div className="accountOrders">
                <h5>Orders go here</h5>
            </div>
        </div>)
}

export default Account
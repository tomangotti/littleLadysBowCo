import { useEffect, useState } from "react"
import UpdateBowCard from "./UpdateBowCard"
import { Route } from "react-router-dom"
import UpdateLogoImage from "./UpdateLogoImage"


function AdminPage(){
    const [photo, setPhoto] = useState(null)
    const [bows, setBows] = useState(null)
    const [options, setOptions] = useState(null)
    const [editBow, setEditBow] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        style: ""
    })

    useEffect(() => {
        fetch(`/bows`)
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setBows(data)
                })
            }
        })
    }, [])

    //add new bow
    function handleNewBow(e){
        e.preventDefault()

        const formData = new FormData()
            formData.append("photo", photo)
            formData.append("name", e.target.name.value)
            formData.append("description", e.target.description.value)
            formData.append("price", e.target.price.value)
            formData.append("style", e.target.style.value)
            formData.append("quantity", e.target.quantity.value)

        fetch(`/bows`,{
            method: "POST",
            body: formData
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    console.log("data recieved")
                })
            }
        })
        e.target.reset()
    }

    if(!bows){
        return <h1>Loading</h1>
    }

    const bowSelect = bows.map((bow) => {
        return(<option>{bow.name}</option>)
    })

    function handleSelectChange(e){
        bows.forEach((bow) => {
            if(bow.name === e.target.value){
                setEditBow(bow)
            }
        })
    }

    return(<>
        <div className="addNewBow" >
            <h1>Add new bow form</h1>
            <form className="addNewBowForm" onSubmit={handleNewBow}>
                <label>Name: </label>
                <input type="text" name="name" /><br></br>
                <label>Description: </label>
                <input type="text" name="description"/><br></br>
                <label>Price: </label>
                <input type="number" name="price"/><br></br>
                <label>Quantity: </label>
                <input type="number" name="quantity"/><br></br>
                <label>Style: </label>
                <select name="style">
                    <option value="">Choose</option>
                    <option value="clay">Clay</option>
                    <option value="fabric">Fabric</option>
                </select><br></br>
                <input type="file" onChange={(e) => setPhoto(e.target.files[0])} accept="photo/*" placeholder="Photo" className="file-input file-input-bordered w-full max-w-xs" name="photo"/><br></br>
                <button>Add New Bow</button>
            </form>
        </div>
        <div className="updateBowForm">
            <h1>Update Bow</h1>
            <select onChange={handleSelectChange}>
                <option>Select Bow</option>
                {bowSelect}
            </select>
            <UpdateBowCard editBow={editBow} />
        </div>
        <div>
            <h1>Update Logo</h1>
            <UpdateLogoImage />
        </div>
        
    </>)
}

export default AdminPage
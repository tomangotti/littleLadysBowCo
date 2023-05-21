import { useState } from "react"

function  UpdateBowCard({editBow}){
    const [image, setImage] = useState(null)

    // update form
    function handleUpdate(e){
        e.preventDefault()

        const formData = new FormData()
            
            formData.append("name", e.target.name.value)
            formData.append("description", e.target.description.value)
            formData.append("price", e.target.price.value)
            formData.append("quantity", e.target.quantity.value)

            if(image){
                formData.append("photo", image)
            }

        fetch(`/bows/${editBow.id}`,{
            method: "PATCH",
            body: formData
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    console.log(data)
                })
            }
        })
    }

    return(
        <div className="editForm">
            <img src={editBow.photo} />
            <form className="updateNewBow" onSubmit={handleUpdate}>
                <label>Name: </label>
                <input type="text" name="name" defaultValue={editBow.name}/><br></br>
                <label>Description: </label>
                <input type="text" name="description" defaultValue={editBow.description} /><br></br>
                <label>Price: </label>
                <input type="number" name="price" defaultValue={editBow.price} /><br></br>
                <label>Quantity: </label>
                <input type="number" name="quantity" defaultValue={editBow.quantity}/><br></br>
                <label>Style: </label>
                <select name="style">
                    <option value="">Choose</option>
                    <option value="clay">Clay</option>
                    <option value="fabric">Fabric</option>
                </select><br></br>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="photo/*" placeholder="Photo" className="file-input file-input-bordered w-full max-w-xs" name="photo"/><br></br>
                <button>Save</button>
            </form>
        </div>
    )
}

export default UpdateBowCard
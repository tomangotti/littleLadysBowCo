import { useState } from "react"


function BowContainer(){
const [photo, setPhoto] = useState(null)

    // add new bow function
    function handleNewBow(e){
        e.preventDefault()

        const formData = new FormData()
            formData.append("photo", photo)
            formData.append("name", e.target.name.value)
            formData.append("description", e.target.description.value)
            formData.append("price", e.target.price.value)
            formData.append("quantity", e.target.quantity.value)

        fetch(`/bows`,{
            method: "POST",
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




    return(<>
    <form className="addNewBow" onSubmit={handleNewBow}>
        <label>Name: </label>
        <input type="text" name="name" /><br></br>
        <label>Description: </label>
        <input type="text" name="description"/><br></br>
        <label>Price: </label>
        <input type="number" name="price"/><br></br>
        <label>Quantity: </label>
        <input type="number" name="quantity"/><br></br>
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} accept="photo/*" placeholder="Photo" className="file-input file-input-bordered w-full max-w-xs" name="photo"/><br></br>
        <button>Add New Bow</button>
    </form>
    </>)
}

export default BowContainer
import { useState } from "react"

function UpdateLogoImage(){
    const [logo, setLogo] = useState(null)


    function handleNewLogo(e){
        e.preventDefault()

        const formData = new FormData()
            formData.append("photo", logo)

        fetch(`/logo_images`,{
            method: "POST",
            body: formData
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setLogo(data)
                })
            }
        })
        e.target.reset()
    }


    return(
    <div className="updateLogo">
        {logo ? <img src={logo.photo} /> : <img />}
        <form onSubmit={handleNewLogo}>
            <label>Logo Image: </label>
            <input type="file" onChange={(e) => setLogo(e.target.files[0])} accept="photo/*" placeholder="Photo" className="file-input file-input-bordered w-full max-w-xs" name="photo"/><br></br>
            <button>Add New Bow</button>
        </form>
    </div>)
}

export default UpdateLogoImage
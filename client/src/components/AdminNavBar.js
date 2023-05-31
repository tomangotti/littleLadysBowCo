import { useNavigate } from "react-router-dom"


function AdminNavBar(){
    const navigate = useNavigate()

    function handleEditBows(){
        navigate('/admin_page/editBows')
    }

    function handleInventory(){
        navigate('/admin_page/inventory')
    }



    return(<div>
        <button onClick={handleEditBows}>Edit Bows</button>
        <button>Orders</button>
        <button onClick={handleInventory}>Inventory</button>
        <button>Requests</button>
    </div>)
}

export default AdminNavBar
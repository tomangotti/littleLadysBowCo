import { useNavigate } from "react-router-dom"


function AdminNavBar(){
    const navigate = useNavigate()

    function handleEditBows(){
        navigate('/admin_page/editBows')
    }

    function handleInventory(){
        navigate('/admin_page/inventory')
    }

    function handleOrders(){
        navigate('/admin_page/orders')
    }

    function handleRequests(){
        navigate('/admin_page/requests')
    }



    return(<div>
        <button onClick={handleEditBows}>Edit Bows</button>
        <button onClick={handleOrders}>Orders</button>
        <button onClick={handleInventory}>Inventory</button>
        <button onClick={handleRequests}>Requests</button>
    </div>)
}

export default AdminNavBar
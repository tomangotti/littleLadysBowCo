import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"

import AdminNavBar from "./AdminNavBar"
import EditBows from "./EditBows"
import Inventory from "./Inventory"
import Requests from "./Requests"
import Orders from "./Orders"


function AdminPage({admin}){
    
    if(!admin){
        return(<h1>Please log in</h1>)
    }

    return(<>
        <AdminNavBar />
        <Routes>
            <Route path="/editBows" element={<EditBows />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
        
    </>)
}

export default AdminPage
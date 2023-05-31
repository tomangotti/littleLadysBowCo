import { useEffect, useState } from "react"

function Inventory(){
    const [table, setTable] = useState(null)

    useEffect(() => {
        fetch('/bows')
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setTable(data)
                })
            }
        })
    },[])

    if(!table){
        return(<h1>Loading</h1>)
    }

    const tableData = table.map((bow, index) => {
        return(
        <tr key={index}>
            <td>{bow.name}</td>
            <td>{bow.quantity}</td>
        </tr>)
    })


    return(<>
    <h1>Inventory</h1>
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
            </tr>
            {tableData}
        </table>
    </div>
    </>)
}

export default Inventory
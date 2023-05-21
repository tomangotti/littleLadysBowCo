import { useEffect, useState } from "react"
import BowCard from "./BowCard"


function BowContainer(){
    const [bows, setBows] = useState(null)
    const [filter, setFilter] = useState(null)
    const [styleOption, setStyleOption] = useState("Select")
    

    // initial fetch to load bows
    useEffect(() => {
        fetch('/bows')
        .then((r) => {
            if(r.ok){
                r.json().then((data) =>{
                    setBows(data)
                })
            }
        })
    },[])

    if(bows === null){
        return <h1>Loading</h1>
    }

    



    // search bar and sort
    function handleSearch(e){
        setFilter(e.target.value.toLowerCase())
    }

    const styleOptionBowsList = bows.filter((bow) => {
        if(styleOption === "Select"){
            return bow
        }else{
            return bow.style === styleOption
        }
    })

    const filteredBowList = styleOptionBowsList.filter((bow) => {
        if(filter){
        return bow.name.toLowerCase().includes(filter)
        }else{
            return bow
        }
    })

    const bowList = filteredBowList.map((bow) => {
        if(bow.quantity > 0){
            return <BowCard key={bow.id} bow={bow}/>;
        }
            })

    const outOfStockList = filteredBowList.map((bow) => {
        if(bow.quantity === 0){
            return <BowCard key={bow.id} bow={bow} />
        }
    })

    const styleOptions = []

    bows.forEach((bow) => {
        if(!styleOptions.includes(bow.style)){
            styleOptions.push(bow.style)
        }
    })

    const optionList = styleOptions.map((style) => {
        return <option value={style}>{style}</option>
    })

    function handleStyle(e){
        setStyleOption(e.target.value)
    }

 

    return(<>
        <div className="searchBar">
            <div>
                <form>
                    <label>Search: </label>
                    <input type="text" name="searchBar" onChange={handleSearch}/>
                    <label>Style: </label>
                    <select onChange={handleStyle}>
                        <option>Select</option>
                        {optionList}
                    </select>
                </form>
            </div>
        </div>
        
        <div className="bowContainer">
            {bowList}
        </div>
        <h2>Out of Stock</h2>
        <div className="outOfStock">
            {outOfStockList}
        </div>
    </>)
}

export default BowContainer
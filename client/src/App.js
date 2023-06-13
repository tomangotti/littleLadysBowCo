import { useState, useEffect } from "react";
import {HashRouter} from "react-router-dom"
import {Routes, Route} from "react-router"

import Header from "./components/Header";
import BowContainer from "./components/BowContainers";
import AdminPage from "./components/AdminPage";
import BowPage from "./components/BowPage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import AdminLogin from "./components/AdminLogin";
import CartPage from "./components/CartPage";
import CheckOutPage from "./components/CheckOutPage";

function App() {
  const [user, setUser] = useState(null)
  const [admin, setAdmin] =useState(null)
  const [cart, setCart] = useState(null)

  useEffect(() => {
    fetch('/me')
    .then((r) =>{
      if(r.ok){
        r.json().then((data) => {
          setUser(data)
          getCart(data.id)
        })
      }
    })

    fetch('/admin')
    .then((r) =>{
      if(r.ok){
        r.json().then((data) =>{
          setAdmin(data)
        })
      }
    })
  }, [])

  function getCart(id){
    fetch(`/cart/users/${id}`)
    .then((r) => {
      r.json().then((data) => {
        setCart(data)
      })
    })
  }

  function addToCart(item){
    setCart([...cart, item])
  }



  return (
    <HashRouter>
      <Header user={user} setUser={setUser} />
    
      <Routes>
        <Route path="/admin_page/*" element={<AdminPage admin={admin} setAdmin={setAdmin} />} />
        <Route path="/admin_login" element={<AdminLogin admin={admin} setAdmin={setAdmin} />} />
        <Route exact path="/" element={<BowContainer />} />
        <Route path='/bows/:id' element={<BowPage user={user} setUser={setUser} addToCart={addToCart}/>} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sign_up' element={<SignUp user={user} setUser={setUser} />} />
        <Route path='/account' element={<Account user={user} setUser={setUser} />} />
        <Route path='/cart' element={<CartPage user={user} cart={cart} setCart={setCart}  />} />
        <Route path='/checkout' element={<CheckOutPage user={user} cart={cart} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

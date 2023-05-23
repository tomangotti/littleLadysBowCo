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

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch('/show_me')
    .then((r) =>{
      if(r.ok){
        r.json().then((data) => {
          setUser(data)
        })
      }
    })
  }, [])

  return (
    <HashRouter>
      <Header user={user} setUser={setUser} />
    
      <Routes>
        <Route path="/admin_page" element={<AdminPage />} />
        <Route exact path="/" element={<BowContainer />} />
        <Route path='/bows/:id' element={<BowPage />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sign_up' element={<SignUp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

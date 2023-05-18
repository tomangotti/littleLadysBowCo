import { useState, useEffect } from "react";
import {HashRouter} from "react-router-dom"
import {Routes, Route} from "react-router"

import Header from "./components/Header";
import BowContainer from "./components/BowContainers";
import AdminPage from "./components/AdminPage";

function App() {
  

  return (
    <HashRouter>
      <Header />
      <h1>Hello world</h1>

      <Routes>
        <Route path="/admin_page" element={<AdminPage />} />
        <Route exact path="/" element={<BowContainer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

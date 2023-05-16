import { useState, useEffect } from "react";
import {HashRouter, Routes} from "react-router-dom"

import Header from "./components/Header";
import BowContainer from "./components/BowContainers";

function App() {
  

  return (
    <HashRouter>
      <Header />
      <h1>Hello world</h1>
      <BowContainer />
      <Routes>
      
      </Routes>
    </HashRouter>
  );
}

export default App;

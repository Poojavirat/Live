import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Room from "./components/Room";
import Record from "./components/Record";

const App = () => {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/room/:id" element={<Room/>}/>
          <Route path="/record" element={<Record/>}/>
          
        </Routes>
    </BrowserRouter>
  );
};

export default App;

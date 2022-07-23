import React from "react";
import './App.css';
import {BrowserRouter,Routes,Switch,Route } from "react-router-dom";
import Home from './Home.js';
import CauseList from './CauseList.js';
import AddCause from './Addcause'
function App() {

  const causes=[
    {
      id:"1",
      name:"Prasanth",
      Description:"this is working",
    },
    {
      id:"2",
      name:"Prudvi",
      Description:"this is also working",
    }
  ]
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/AddCause" element={<AddCause/>}/>
      <Route path="/Causelist" element={<CauseList causes={causes}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import './App.css';
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
    <div className="ui container">
      <Home />
      <AddCause />
      <CauseList causes={causes}/>
    </div>
  );
}

export default App;

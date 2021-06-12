import logo from "./logo.svg";
import React from 'react'
import "./App.css";


//components
import Topheader from "./component/Topheader";
import Maincontent from "./component/Maincontent";
const App = () => {
  return(
    <>
    <Topheader />
    <Maincontent />
    </>
  )
}

export default App;

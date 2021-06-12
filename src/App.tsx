import logo from "./logo.svg";
import React from 'react'
import "./App.css";


//components
import Topheader from "./component/Topheader";
import Maincontent from "./component/Maincontent";
import Loadingmessage from "./component/Loadingmessage";

const App = () => {
  return(
    <>
    <Topheader />
    <Maincontent />
    <Loadingmessage />
    </>
  )
}

export default App;

import logo from "./logo.svg";
import React from 'react'
import "./App.css";
import "firebase/firestore";
import { useFirestoreDocData, useFirestore } from "reactfire";
import { boolean } from "yargs";

const App = () => {

  const burritoRef = useFirestore().collection("tryreactfire").doc("burrito");
  
  // subscribe to a document for realtime updates. just one line!
  const { status, data} = useFirestoreDocData<any>(burritoRef);

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is {data.yummy ? 'good' : 'bad'}!</p>;
}

export default App;

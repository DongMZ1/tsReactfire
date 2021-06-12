import React from 'react'
import {useFirestoreCollection, useFirestore } from "reactfire";

const Maincontent = () =>{
    const usersref = useFirestore().collection("items");
    
    const {data, status} = useFirestoreCollection(usersref);
    if (status === 'loading') {
      return <p>Fetching burrito flavor...</p>;
    }
    return <>
      {data?.docs?.map(d =><h1>{d.data().name}</h1>)}
    </>;
}


export default Maincontent;
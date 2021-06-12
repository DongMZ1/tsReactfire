import React from 'react'
import "firebase/firestore";
import { useFirestoreCollection, useFirestore } from "reactfire";

const Maincontent = () =>{
    const usersref = useFirestore().collection("users");
    
    const {data, status} = useFirestoreCollection(usersref);
    
    if(status === 'loading') return <>is Loading ..........</>;

    return <>
      {data?.docs?.map(user => <h1>{user.data().name}</h1>)}
    </>;
}


export default Maincontent;
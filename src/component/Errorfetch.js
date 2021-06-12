import {
  AuthCheck,
  useAuth,
  useFirestoreCollection,
  useFirestore,
} from "reactfire";
import React, { Suspense } from "react";
import { ALL } from "dns";

const Maincontent = () => {
  const ItemsRef = useFirestore().collection("items");
  const { data, status } = useFirestoreCollection(ItemsRef);
  //there is an issue, the status is constantly loading...
  return (
    <>
      UseFirestoreCollection hook cannot fetch data from firebase database,
      the status is always "{status}" after initial rendering. even if the component is rerendered,
      still cannot fetch data from firebase database...
      
      <br />
      The data ?
       {data? (data?.docs?.map(item => 
            <p>{item.name}</p>
      )) : ' Is empty based on js expression see Maincontent.js'}
      <br />
      Reference: https://github.com/aaronksaunders/quick-intro-reactfire1/blob/master/src/Home.js
    </>
  );
};

export default Maincontent;

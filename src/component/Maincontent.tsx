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
  return <>
   {status === "loading" ? <p>UseFirestoreCollection hook cannot fetch data from firebase database, the status is always "{status}"</p> : {status}}
  </>;
};

export default Maincontent;

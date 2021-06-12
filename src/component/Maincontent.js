import React from "react";
import {
  useFirestoreCollection,
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire";

const Maincontent = () => {
  const itemsRef = useFirestore().collection("items");
  const { data, status } = useFirestoreCollection(itemsRef);
  if (status === "loading") {
    return <p>fetch user...</p>;
  };
  return <p>hello!</p>;
};

export default Maincontent;

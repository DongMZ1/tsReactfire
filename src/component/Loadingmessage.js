import React from 'react'
import { useFirestoreDocData, useFirestore } from 'reactfire';
const Loadingmessage =() =>{
    // easily access the Firestore library
  const burritoRef = useFirestore()
  .collection('tryreactfire')
  .doc('burrito');

// subscribe to a document for realtime updates. just one line!
const { status, data } = useFirestoreDocData(burritoRef);

// easily check the loading status
if (status === 'loading') {
  return <p>Fetching burrito flavor...</p>;
}

return <p>The burrito is {data.yummy ? 'good' : 'bad'}!</p>;
}

export default Loadingmessage;
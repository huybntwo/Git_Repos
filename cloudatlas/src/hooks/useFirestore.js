import React from "react";
import { db } from "../firebase/config";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  where,
} from "firebase/firestore";

const useFirestore = (collec, condition) => {
  const [ documents, setDocuments ] = React.useState([]);

  React.useEffect(() => {
    //create collection 'rooms'
    const ref = collection(db, collec);
    // console.log({ref})
    let q = query(ref, orderBy('createdAt'));
    //where("population", ">", 100000)
    //condition
    /*
    fieldName: 'abc'
    operator: '=='
    compareValue: 'edf'
     */

    //!condition.compareValue <=> condition.compareValue == null
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        // reset documents data
        setDocuments([]);
        return;
      }

      q = query(
        q,
        where(condition.fieldName, condition.operator, condition.compareValue)
      );
    }
    //khi mà các state hoặc props trong dependency của useEffect thay đổi thì đoạn code return dưới đây sẽ thực thi
    //để huỷ theo dõi onSnapshot cũ và chuyển qua theo dõi onSnapshot mới
    //You can listen to a document with the onSnapshot() method. An initial call using the 
    //callback you provide creates a document snapshot immediately with the current contents of the single document. 
    //Then, each time the contents change, another call updates the document snapshot.
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocuments(documents);
      // console.log({documents})
      // console.log({ documents, snapshot, doc: snapshot.docs });
    });
    return unsubscribe;
  }, [collec, condition]);

  return documents;
};

export default useFirestore;

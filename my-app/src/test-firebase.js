import { useState, useEffect } from 'react';
import { db } from './firebase';
import {getDocs, collection, onSnapshot} from "firebase/firestore";



function App(){

  const [user,setUser] = useState([])

  useEffect(()=>{
    const unsub = onSnapshot(collection(db,'erp'),(snapshot)=>{
      console.log(snapshot.docs[0].data())
      setUser(snapshot.docs[0].data())
    });
    return unsub
  },[])


  return(
    <>
    <h1>nama: {user.name}</h1>
    <h1>job: {user.job}</h1>
    </>
  )
};

export default App;

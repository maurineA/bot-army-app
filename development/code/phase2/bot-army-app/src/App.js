import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [bots, setBots] = useState([]);


  useEffect(() =>{
    fetch('http://localhost:3000/bots')
    .then((res)=>res.json())
    .then(data =>{
      setBots(data)
    })
  },[])
  return (
    <>
    </>
  );
}

export default App;

import React from "react";
import Nav from "./Nav";
import BankList from "./BankList";
import { useEffect,useState } from "react";
import SubmitForm from "./SubmitForm";
import SearchBank from "./SearchButton";


function App() {
  
const [bank, setBank]=useState([])
const [input, setInput]=useState("")
const [label, setSearch]=useState('')


//useEffect
useEffect(
  ()=>{
    fetch("http://localhost:8001/transactions")
    .then((res) => res.json())
    .then((data) => {
      setBank(data)
      
    //  console.log(data);
    });
  }
  

)


// console.log(bank)

  return (
    <>
      
      <SearchBank onSearchChange={label} />
      <SubmitForm input={input} setInput={setInput} />
       <BankList banks={bank} />
       <nav/>
      
   
    
    </>
    

  );
}

export default App;

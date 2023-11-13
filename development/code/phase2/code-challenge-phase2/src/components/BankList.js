import React from "react";
import BankItems from "./BankItems"; 


function BankList({banks}) {
  

    // console.log(banks)
  const bankItems = banks.map((transaction) => (
    <BankItems banks={transaction} key={transaction.id} />
  ));

  return (
    
    <table>
         <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
        {bankItems}
    </table>

  );
}

export default BankList;









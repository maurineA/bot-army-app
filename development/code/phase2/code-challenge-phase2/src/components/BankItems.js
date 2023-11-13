// BankItems.js
import React from "react";

function BankItems({ banks }) {
  return (
    <>
   
      <tbody>
        <tr>
          <td>{banks.category}</td>
          <td>{banks.description}</td>
          <td>{banks.date}</td>
          <td>{banks.amount}</td>
        </tr>
      </tbody>
    </>
  );
}

export default BankItems;

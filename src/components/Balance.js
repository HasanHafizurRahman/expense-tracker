import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h3 style={{ color: "yellow", fontWeight: "bolder" }}>Your Balance:</h3>
      <h4>${total}</h4>
    </div>
  );
};

export default Balance;

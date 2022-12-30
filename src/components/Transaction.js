import React from 'react';

const Transaction = ({transaction}) => {
    return (
      <div>
        <li>
          {transaction.text} <span>{transaction.amount}</span>{" "}
          <button className="delete-btn">x</button>
        </li>
      </div>
    );
};

export default Transaction;
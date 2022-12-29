import React from "react";

const Transactionlist = () => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        <li>
          Cash <span>-$400</span> <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};

export default Transactionlist;

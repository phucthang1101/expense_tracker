import React, { useState,useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmout] = useState(0);
  const {addTransaction} = useContext(GlobalContext);

 const onSubmit = (e) =>{
  e.preventDefault();
  const newTransaction = {
    id:Math.floor(Math.random() * 100000000),
    text,
    amount:+amount
  }
  addTransaction(newTransaction)
  }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} id="form">
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={e => setAmout(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

import { createContext } from "react";

const initialState = {
  transactions: [
    { id: 1, text: "flower", amount: -20 },
    { id: 2, text: "Salary", amount: 60020 },
    { id: 3, text: "Book", amount: -320 },
    { id: 4, text: "Freelancing", amount: 21020 },
  ],
};

export const GlobalState = createContext(initialState);

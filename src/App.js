import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import Transactionlist from "./components/Transactionlist";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <Transactionlist />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;

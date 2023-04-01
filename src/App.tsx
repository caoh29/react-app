import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  interface Expense {
    id: string,
    title: string;
    amount: number;
    date: Date;
  }

  const expenses: Expense[] = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date()},
    { id: 'e2', title: 'Bike Insurance', amount: 124.15, date: new Date()}
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
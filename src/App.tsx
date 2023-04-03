import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

export interface Expense {
  id: string,
  title: string;
  amount: string;
  date: Date;
}


function App() {

  function addExpenseHandler (expense: Expense) {
    console.log(expense);
  }

  const expenses: Expense[] = [
    { id: 'e1', title: 'Car Insurance', amount: '294.67', date: new Date()},
    { id: 'e2', title: 'Bike Insurance', amount: '124.15', date: new Date()}
  ];

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
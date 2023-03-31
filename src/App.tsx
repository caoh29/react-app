import ExpenseItem from "./components/ExpenseItem";

function App() {
  interface Expense {
    id: string,
    title: string;
    amount: number;
    date: Date;
  }

  const expenses: Expense[] = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 31)}
  ];

  return (
    <div>
      <ExpenseItem
        title = {expenses[0].title}
        amount = {expenses[0].amount}
        date = {expenses[0].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
import ExpenseForm, { ExpenseData } from "./ExpenseForm";
import {Expense} from "../App";
export interface NewExpenseProps {
    onAddExpense: (expense: Expense) => void;
}

function NewExpense (props: NewExpenseProps) {

    const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
        const expenseData: Expense = {...enteredExpenseData, id: Math.random().toString()};
        props.onAddExpense(expenseData);
    }

    return (
        <div className="container bg-success bg-gradient text-black fs-6 fw-bold rounded mt-4 p-3">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
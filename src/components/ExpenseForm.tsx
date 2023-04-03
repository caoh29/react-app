import { useState } from "react";

export interface ExpenseData {
    title: string,
    date: Date,
    amount: string
}

export interface ExpenseFormProps {
    onSaveExpenseData: (enteredExpenseData: ExpenseData) => void;
}


function ExpenseForm (props: ExpenseFormProps) {
    const MIN_AMOUNT:number = 0.01;
    const STEP:number = 0.01;

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    function titleChangeHandler (e:React.ChangeEvent<HTMLInputElement>) {
        setEnteredTitle(e.target.value);
    }

    function dateChangeHandler (e:React.ChangeEvent<HTMLInputElement>) {
        setEnteredDate(e.target.value);
    }

    function amountChangeHandler (e:React.ChangeEvent<HTMLInputElement>) {
        setEnteredAmount(e.target.value);
    }

    function submitHandler (e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="row">
                <div className="col d-flex flex-column">
                    <label>Title</label>
                    <input className="border-0 rounded p-1" type="text" name="title" id="input-title" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="col d-flex flex-column">
                    <label>Date</label>
                    <input className="border-0 rounded p-1" type="date" name="date" id="input-date" onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col d-flex flex-column">
                    <label>Amount</label>
                    <input className="border-0 rounded p-1" type="number" name="amount" id="input-amount" min={MIN_AMOUNT} step={STEP} onChange={amountChangeHandler} value={enteredAmount}/>
                </div>
                <div className="col"></div>
            </div>
            <div className="row py-2 mt-2">
                <div className="col d-flex justify-content-end">
                    <button type="submit" className="text-white btn btn-primary">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;
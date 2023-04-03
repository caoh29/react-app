import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";


function Expenses (props: { items: { id?: string, title: string, amount: string, date: Date }[] }) {

    const [filteredYear, setfilteredYear] = useState('default');

    const filterByYearHandler = (selectedYear: string) => {
        setfilteredYear(selectedYear);
    }

    return(
        <div className="container">
            <ExpensesFilter onFilterByYear={filterByYearHandler} selectedValue={filteredYear}/>
            <Card className="container bg-black text-white my-4 py-3">
                <ExpenseItem
                    title = {props.items[0].title}
                    amount = {props.items[0].amount}
                    date = {props.items[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title = {props.items[1].title}
                    amount = {props.items[1].amount}
                    date = {props.items[1].date}
                ></ExpenseItem>
            </Card>
        </div>
    );
}

export default Expenses;
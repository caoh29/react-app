import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

interface ExpenseItemProps {
    title: string;
    amount: number;
    date: Date;
}

function ExpenseItem(props: ExpenseItemProps): JSX.Element {

    const [title, setTitle] = useState(props.title);

    function clickHandler () {
        setTitle('Updated!');
    }

    return (
        <Card className="expense-item bg-secondary">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Update Title</button>
        </Card>
    );
}

export default ExpenseItem;
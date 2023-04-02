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
        <Card className="container bg-secondary my-2">
            <div className="d-flex align-items-center">
                <ExpenseDate date={props.date} />
                <div className="col-6">
                    <h2 className="text-left">{title}</h2>
                </div>
                <div className="col">
                    <h2 className="btn btn-primary btn-outline-light">${props.amount}</h2>
                </div>
                <div className="col">
                    <button onClick={clickHandler}>Update Title</button>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
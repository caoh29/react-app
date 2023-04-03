import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

interface ExpenseItemProps {
    title: string;
    amount: string;
    date: Date;
}

function ExpenseItem(props: ExpenseItemProps): JSX.Element {
    return (
        <Card className="container bg-secondary my-2">
            <div className="d-flex align-items-center">
                <ExpenseDate date={props.date} />
                <div className="col-6">
                    <h2 className="text-left">{props.title}</h2>
                </div>
                <div className="col d-flex justify-content-end">
                    <h2 className="btn btn-primary btn-outline-light">${props.amount}</h2>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
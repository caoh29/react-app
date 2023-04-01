import ExpenseItem from "./ExpenseItem";
import Card from "./Card";


function Expenses (props: { id?: string, title: string, amount: number, date: Date }[] ) {
    return(
        <Card className="container bg-primary">
            <ExpenseItem
                title = {props[0].title}
                amount = {props[0].amount}
                date = {props[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title = {props[1].title}
                amount = {props[1].amount}
                date = {props[1].date}
            ></ExpenseItem>
        </Card>
    );
}

export default Expenses;
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";


function Expenses (props: { items: { id?: string, title: string, amount: number, date: Date }[] }) {
    return(
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
    );
}

export default Expenses;
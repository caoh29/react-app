interface ExpenseDateProps {
    date: Date;
}

function ExpenseDate(props: ExpenseDateProps): JSX.Element {
    const month:string = props.date.toLocaleString('es-CO', { month: "long" });
    const day:string = props.date.toLocaleString('es-CO', { day: "2-digit" });
    const year:number = props.date.getFullYear();

    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    );
}

export default ExpenseDate;
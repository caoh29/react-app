interface ExpenseDateProps {
    date: Date;
}

function ExpenseDate(props: ExpenseDateProps): JSX.Element {
    const month:string = props.date.toLocaleString('es-CO', { month: "long" });
    const day:string = props.date.toLocaleString('es-CO', { day: "2-digit" });
    const year:number = props.date.getFullYear();

    return (
        <div className="col">
            <div className="btn btn-dark btn-outline-light my-2 px-3">
                <div className="text-capitalize fw-semibold">{month}</div>
                <div className="fw-light">{year}</div>
                <div className="fw-bold fs-5">{day}</div>
            </div>
        </div>
    );
}

export default ExpenseDate;
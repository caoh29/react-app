import ExpenseForm from "./ExpenseForm";

function NewExpense () {
    return (
        <div className="container bg-success bg-gradient text-black fs-6 fw-bold rounded mt-4 p-3">
            <ExpenseForm/>
        </div>
    );
}

export default NewExpense;
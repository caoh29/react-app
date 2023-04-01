function ExpenseForm () {
    const MIN_AMOUNT:number = 0.01;
    const STEP:number = 0.01;

    return (
        <form>
            <label>Title</label>
            <input type="text" name="title" id="input-title" />
            <label>Date</label>
            <input type="date" name="date" id="input-date" />
            <label>Amount</label>
            <input type="number" name="amount" id="input-amount" min={MIN_AMOUNT} step={STEP}/>
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
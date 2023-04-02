function ExpenseForm () {
    const MIN_AMOUNT:number = 0.01;
    const STEP:number = 0.01;

    return (
        <form>
            <div className="row">
                <div className="col d-flex flex-column">
                    <label>Title</label>
                    <input className="border-0 rounded p-1" type="text" name="title" id="input-title" />
                </div>
                <div className="col d-flex flex-column">
                    <label>Date</label>
                    <input className="border-0 rounded p-1" type="date" name="date" id="input-date" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col d-flex flex-column">
                    <label>Amount</label>
                    <input className="border-0 rounded p-1" type="number" name="amount" id="input-amount" min={MIN_AMOUNT} step={STEP}/>
                </div>
                <div className="col"></div>
            </div>
            <div className="row py-2 mt-2">
                <div className="col d-flex justify-content-end">
                    <button type="submit" className="text-white btn btn-primary">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;
interface ExpensesFilterProps {
    onFilterByYear: (selectedYear: string) => void;
    selectedValue:string;
}

function ExpensesFilter (props: ExpensesFilterProps) {

    function dropdownChangeHandler (e:React.ChangeEvent<HTMLSelectElement>) {
        props.onFilterByYear(e.target.value);
    }

    return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select onChange={dropdownChangeHandler} value={props.selectedValue}>
                <option value="default">Select a year...</option>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    </div>
    );
};

export default ExpensesFilter;
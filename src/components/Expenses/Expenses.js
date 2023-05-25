import React, {useState} from "react";

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

    return <div>
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    </div>
}

export default Expenses;
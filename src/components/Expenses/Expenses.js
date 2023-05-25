import React, {useState} from "react";

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return <div>
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
            {props.items.filter(item => new Date(item.date).getFullYear() == filteredYear).map(item => <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount}/>)}
        </Card>
    </div>
}

export default Expenses;
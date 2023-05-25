import React, {useState} from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [displayForm, setDisplayForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        }
        props.onAddExpense(expenseData);
    }

    const displayNewExpenseFormHandler = () => {
        setDisplayForm(true)
    }

    const hideNewExpenseFormHandler = () => {
        setDisplayForm(false)
    }

    return <div className="new-expense">
        {displayForm && <ExpenseForm onHideExpenseForm={hideNewExpenseFormHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        {!displayForm && <button onClick={displayNewExpenseFormHandler} className="test">Add New Expense</button>}
    </div>;
}

export default NewExpense;
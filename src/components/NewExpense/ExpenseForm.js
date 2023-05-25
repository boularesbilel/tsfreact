import React, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    /*const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState('');*/

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: 0,
        enteredDate: '',
    })

    const titleChangeHandler = (event) => {
        /*setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });*/

        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        });
    }
    const amountChangeHandler = (event) => {
        /*setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });*/
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value};
        });
    }
    const dateChangeHandler = (event) => {
        /*setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });*/
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value};
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        }
        props.onSaveExpenseData(expenseData);

        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: '',
                enteredAmount: 0,
                enteredDate: '',
            };
        });

    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title {userInput.enteredTitle}</label>
                <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" value={userInput.enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>;
}

export default ExpenseForm;
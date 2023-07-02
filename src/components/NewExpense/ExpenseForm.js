import React from 'react'
import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {

    const submitHandler = (event)=>{
         event.preventDefault()
         const expenseData={
            title: title,
            amount: +amount,
            date: new Date(date)
         }
props.onSaveExpenseData(expenseData)
setTitle('')
setAmount('')
setDate('')
    }

   const [title, setTitle] = useState('');
   const [amount, setAmount] = useState('');
   const [date, setDate] = useState('');
const titleChangeHandler = (event)=>{ setTitle(event.target.value)}
const amountChangeHandler = (event)=>{setAmount(event.target.value)}
const dateChangeHandler = (event)=>{setDate(event.target.value)}
  return (
   <form onSubmit={submitHandler}  >
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
<label>Title</label>
<input type="text" onChange={titleChangeHandler} className='new-expense__control input'  value={title}/>
        </div>
        <div className='new-expense__control'>
<label>Amount</label>
<input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} className='new-expense__control input' value={amount} />
        </div>
        <div className='new-expense__control'>
<label>Date</label>
<input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}  className='new-expense__control input' value={date}/>
        </div>
    </div>
    <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}> Cancel</button>
<button type='submit'> Add expense</button>
    </div>
   </form>
  )
}

export default ExpenseForm

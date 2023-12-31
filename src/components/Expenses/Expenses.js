import React from 'react'

import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
 const[filteredYear, setFilteredYear]= useState('2020')

let filterInfoText = '2019, 2021, and 2022'
if(filteredYear ==='2019'){
  filterInfoText='2020,2021,and2022'
}
else if(filteredYear ==='2020'){
  filterInfoText='2019,2021,and2022'
}
else if(filteredYear ==='2021'){
  filterInfoText='2020,2019,and2022'
}
else {
  filterInfoText='2020,2021,and 2019'
}

const filterChangeHandler = selectedYear =>{
setFilteredYear(selectedYear)

}


const filteredExpenses = props.items.filter(expense=>{
  return expense.date.getFullYear().toString()=== filteredYear;
})

  return (
    <div>


    <Card className='expenses'>
    <ExpensesFilter
     selected={filteredYear}
     onChangeFilter ={filterChangeHandler}/>
     <ExpensesChart expenses={filteredExpenses} />
  <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  )
}

export default Expenses
  
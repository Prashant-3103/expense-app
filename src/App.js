
import React, { useState } from 'react';

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {BrowserRouter, useNavigate, Route, Routes} from 'react-router-dom'
import Home from './components/UI/Home';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';
import About from './components/UI/About';





const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  }, { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

const [expenses, setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHanler = (expense) =>{
setExpenses((prevExpenses) =>{
  return[expense, ...prevExpenses]
})
  }

  return (
<BrowserRouter>
<Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/new-expense" element={<NewExpense onAddExpense={addExpenseHanler}/>}/>
        <Route path="/expenses" element={<Expenses items={expenses}/>}/>
        <Route path="/about" element={<About/>}/>


      </Routes>
<Footer/>
    </BrowserRouter>
  );
  }

export default App;

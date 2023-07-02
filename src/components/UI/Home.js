import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-content">
      <div className="home-container">
        <h1>Welcome to Expense Tracker</h1>
        <p>Track and manage your expenses with ease.</p>
       <a href="/new-expense"> <button className="add-expense-button">ADD EXPENSE</button></a>
      </div>
    </div>
  );
};

export default Home;

<<<<<<< Updated upstream

"use client";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import Dashboard from "./dashboard.js";
import './globals.css';
export default function page() {
  return (
    <>
    <Header/>
    <Dashboard/>
    </>
  )
};
=======
import React, { useState } from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Expense Tracker</h1>
      <AddExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
>>>>>>> Stashed changes


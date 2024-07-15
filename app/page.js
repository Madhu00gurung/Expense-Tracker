"use client"
import React, { useState, useEffect } from 'react';
import Header from './header';
import ExpenseForm from './expenseform';
import ExpenseList from './expenselist';

const Page = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  const editExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === updatedExpense.id) {
        return updatedExpense;
      } else {
        return expense;
      }
    });
  
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };
  

  return (
    <div className='body'>
      <Header/>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} editExpense={editExpense} />
    </div>
  );
};


export default Page;
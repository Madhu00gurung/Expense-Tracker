import React, { useState } from 'react';
import ExpenseForm from './expenseform.js';
import ExpenseList from './expenselist.js';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const editExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    setExpenseToEdit(null);
  };

  const startEditing = (expense) => {
    setExpenseToEdit(expense);
  };

  return (
    <div className="container mt-5">
      <ExpenseForm
        addExpense={addExpense}
        editExpense={editExpense}
        expenseToEdit={expenseToEdit}
      />
      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
        startEditing={startEditing}
      />
    </div>
  );
};

export default Dashboard;
import React from 'react';

const ExpenseList = ({ expenses, deleteExpense, startEditing }) => {
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span className="fw-bold">{expense.name}</span> - {expense.category} - ${expense.price}
          </div>
          <div>
            <button onClick={() => startEditing(expense)} className="btn btn-warning btn-sm me-2">
              Edit
            </button>
            <button onClick={() => deleteExpense(expense.id)} className="btn btn-danger btn-sm">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
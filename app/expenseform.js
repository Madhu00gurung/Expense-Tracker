import React, { useState, useEffect } from 'react';

const ExpenseForm = ({ addExpense, editExpense, expenseToEdit }) => {
  const [expenseData, setExpenseData] = useState({
    name: '',
    category: '',
    price: ''
  });

  useEffect(() => {
    if (expenseToEdit) {
      setExpenseData(expenseToEdit);
    }
  }, [expenseToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseToEdit) {
      editExpense(expenseData);
    } else {
      addExpense(expenseData);
    }
    setExpenseData({ name: '', category: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          value={expenseData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          type="text"
          name="category"
          value={expenseData.category}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          name="price"
          value={expenseData.price}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {expenseToEdit ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
};

export default ExpenseForm;
"use client"

import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { id: Date.now(), name, category, price: parseFloat(price) };
    addExpense(expense);
    setName('');
    setCategory('');
    setPrice('');
  };

  return (
    <div className= 'container'>
    <form id="expenseForm" onSubmit={handleSubmit} className='form'>
      <label> 
      <span className='label-text-name'>Name :</span>
      <input className='input-box-name'
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      </label>


       <br></br>
       <br></br>
      <label className='label-text'>
      <span className='label-text-category'>Category :</span>
      <input className='input-box-category'
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      </label>

        <br></br>
        <br></br>

      <label className='label-text'>
      <span className='label-text-price'>Price :</span>
      <input className='input-box-price'
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      </label>
      
    </form>
    <button className="add-btn" type="submit" form="expenseForm">Add Expense</button>
    </div>
  );
};

export default ExpenseForm;
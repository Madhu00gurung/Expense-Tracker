"use state";
import React from "react";
import ExpenseForm from "./expenseform.js";
import Search from "./search.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
export default function page() {
  return (
    <>
    <ExpenseForm/>
    <Search/>
    </>
  )
};
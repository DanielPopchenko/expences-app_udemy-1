/* eslint-disable react/prop-types */
import React from 'react';
import { CreateNewExpense } from './createNewExpense';
import styles from './newExpense.module.css';

const NewExpense = ({ onAddNewExpense }) => {
  // ! Прокидываем эту функцию в форму, тем самым можем вытащить оттуда данные
  const saveExpenseDate = (enteredData) => {
    const expenseData = { ...enteredData, id: Math.random(1, 100).toString() };
    onAddNewExpense(expenseData);
    // console.log(expenseData);
  };

  return (
    <div className={styles.newExpense}>
      <CreateNewExpense onSaveExpeseData={saveExpenseDate} />
    </div>
  );
};

export default NewExpense;

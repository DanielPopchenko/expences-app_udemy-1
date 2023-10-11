/* eslint-disable react/prop-types */
import React from 'react';
import ExpenceItem from './ExpenceItem';
import styles from './Expenses.module.css';

const Expenses = ({ expenses }) => {
  console.log(expenses);
  return (
    <div className={styles.expences}>
      {expenses.map((expense) => (
        <ExpenceItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default Expenses;

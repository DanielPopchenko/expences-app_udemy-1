import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Expenses.module.css';

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const month = date.toLocaleString('en-US', { month: 'long' });

  return (
    <div className={styles.expenseDate}>
      <div className={styles.expenseDate__month}>{month}</div>
      <div className={styles.expenseDate__year}>{year}</div>
      <div className={styles.expenseDate__day}>{day}</div>
    </div>
  );
};

ExpenseDate.propTypes = {
  date: PropTypes.object,
};

export default ExpenseDate;

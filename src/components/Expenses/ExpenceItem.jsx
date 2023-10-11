import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Expenses.module.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenceItem = ({ expense }) => {
  return (
    <Card className={styles.expenseItem}>
      <ExpenseDate date={expense.date} />
      <h2>{expense.title}</h2>
      <span className={styles.expenseItem_price}>${expense.amount}</span>
    </Card>
  );
};

ExpenceItem.propTypes = {
  expense: PropTypes.object,
};

export default ExpenceItem;

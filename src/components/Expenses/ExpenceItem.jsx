import { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './Expenses.module.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenceItem = ({ expense }) => {
  // ! Диструктуризируем пропс expense
  const { title, amount, date } = expense;

  return (
    <Card className={styles.expenseItem}>
      <ExpenseDate date={date} />
      <h2>{title}</h2>
      <span className={styles.expenseItem_price}>${amount}</span>

      {/* <button type="button" onClick={handleClick}>
        Change the Title
      </button> */}
    </Card>
  );
};

ExpenceItem.propTypes = {
  expense: PropTypes.object,
};

export default ExpenceItem;

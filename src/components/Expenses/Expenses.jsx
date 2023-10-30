/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ExpenceItem from './ExpenceItem';
import styles from './Expenses.module.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = ({ expenses }) => {
  // 1. Create a state which stores a year
  const [filteredYear, setFilteredYear] = useState('2021');

  // 2. create a method that expects a selected value from select
  const filterChangeHandler = (selectedYear) => {
    // 3. reset our year
    setFilteredYear(selectedYear);
  };

  // crreate a var that filters our expenses and returns new filtered arr
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      <div className={styles.expenses}>
        {/* We do not change a state, we simply map another filtered array */}
        {filteredExpenses.map((expense) => (
          <ExpenceItem key={expense.id} expense={expense} />
        ))}
      </div>
    </Card>
  );
};

export default Expenses;

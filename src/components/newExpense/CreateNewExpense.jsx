/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './NewExpense.module.css';

const CreateNewExpense = ({ onSaveExpeseData }) => {
  //   const [userInputs, setUserInputs] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //   const handleTitleChange = (e) => {
  //     setUserInputs((prev) => ({ ...prev, enteredTitle: e.target.value }));
  //   };

  //   const handleAmountChange = (e) => {
  //     setUserInputs((prev) => ({ ...prev, enteredAmount: e.target.value }));
  //   };

  //   const handleDateChange = (e) => {
  //     setUserInputs((prev) => ({ ...prev, enteredDate: e.target.value }));
  //   };

  const handleInputChange = (identifier, value) => {
    switch (identifier) {
      case 'title':
        setEnteredTitle(value);
        break;
      case 'amount':
        setEnteredAmount(value);
        break;
      case 'date':
        setEnteredDate(value);
        break;
      default:
        console.log('Wrong identifier');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const expeseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpeseData(expeseData);

    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.controls}>
        <div className={styles.expenseControls}>
          <label>Title</label>
          <input
            className={styles.input}
            type="text"
            value={enteredTitle}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </div>

        <div className={styles.expenseControls}>
          <label>Amount</label>
          <input
            className={styles.input}
            type="number"
            min={0.01}
            step={0.01}
            value={enteredAmount}
            onChange={(e) => handleInputChange('amount', e.target.value)}
          />
        </div>

        <div className={styles.expenseControls}>
          <label>Title</label>
          <input
            className={styles.input}
            type="date"
            min="2023-10-14"
            max="2024-04-30"
            value={enteredDate}
            onChange={(e) => handleInputChange('date', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.newExpenseActions}>
        <button type="submit">Add new expense</button>
      </div>
    </form>
  );
};

export { CreateNewExpense };

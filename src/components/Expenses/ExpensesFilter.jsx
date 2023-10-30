/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const dropdownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };

  return (
    // value is mandatory (обязательное)
    <select value={selected} onChange={dropdownChangeHandler}>
      <option disabled>Choose a year</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
    </select>
  );
};

export default ExpensesFilter;

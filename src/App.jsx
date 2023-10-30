import React, { useEffect, useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card';

import { initialExpenses } from './utils/expenses';
import NewExpense from './components/newExpense/newExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

// * ? Controlled components are comps that have props passed from their parent comp
// * ? ...and actually they control/update your comp

// * ? Uncontrolled are comps that have their own state and logic inside themselves

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addNewExpense = (newExpense) => {
    setExpenses((oldExpenses) => [newExpense, ...oldExpenses]);
  };

  return (
    <Card>
      <NewExpense onAddNewExpense={addNewExpense} />
      <Card>
        <Expenses expenses={expenses} />
      </Card>
    </Card>
  );
};

export default App;

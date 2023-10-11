import React from 'react';
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card';

import { expenses } from './utils/expenses';

const App = () => {
  return (
    <Card>
      <Expenses expenses={expenses} />
    </Card>
  );
};

export default App;

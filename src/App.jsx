import React from 'react';
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card';

import { expenses } from './utils/expenses';
import NewExpense from './components/newExpense/newExpense';

const App = () => {
  // ! Создаем функцию тут, ожидаем дату которой тут у нас нету, но мы прокидваем
  // ! эту функцию в компонент в которм она есть и там при ее вызове прокидываем дату в нее
  // ! тем самым имея данные теперь в компоненте выше !!!
  const addNewExpense = (newExpense) => {
    console.log(newExpense);
  };

  return (
    <Card>
      <NewExpense onAddNewExpense={addNewExpense} />
      <Expenses expenses={expenses} />
    </Card>
  );
};

export default App;

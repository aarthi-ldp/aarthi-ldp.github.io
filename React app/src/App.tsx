import React from 'react';

import Expenses from './components/Expenses/Expenses';

interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const App: React.FC = () => {
  const expenses: Expense[] = [
    {
      id: 'e1',
      title: 'Stationaries',
      amount: 1024.12,
      date: new Date(2023, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'Travel Expense',
      amount: 25000, 
     date: new Date(2023, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Groceries',
      amount: 11000,
      date: new Date(2023, 2, 28),
    },
    {
      id: 'e4',
      title: 'Furniture',
      amount: 5000,
      date: new Date(2023, 5, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
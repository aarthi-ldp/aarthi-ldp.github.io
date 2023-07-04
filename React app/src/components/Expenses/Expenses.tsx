import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

interface Expense {
  title: string;
  amount: number;
  date: Date;
}

interface Props {
  items: Expense[];
}

const Expenses: React.FC<Props> = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.title} // Make sure to add a unique key
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;

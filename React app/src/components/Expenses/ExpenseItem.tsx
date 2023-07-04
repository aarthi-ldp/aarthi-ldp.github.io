import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

interface ExpenseItemProps {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ date, title, amount }) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Rs.{amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

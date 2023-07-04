import React from 'react';
import { Meta, Story } from '@storybook/react';
import ExpenseItem from '../components/Expenses/ExpenseItem';

export default {
  title: 'Components/ExpenseItem',
  component: ExpenseItem,
} as Meta;

interface ExpenseItemProps {
  date: Date;
  title: string;
  amount: number;
}

const Template: Story<ExpenseItemProps> = (args) => <ExpenseItem {...args} />;

export const Item1: Story<ExpenseItemProps> = Template.bind({});
Item1.args = {
  title: 'Stationaries',
  amount: 1024.12,
  date: new Date(2023, 7, 14),
};

export const Item2: Story<ExpenseItemProps> = Template.bind({});
Item2.args = {
  title: 'Travel Expense',
  amount: 25000,
  date: new Date(2023, 2, 12),
};

export const Item3: Story<ExpenseItemProps> = Template.bind({});
Item3.args = {
  title: 'Groceries',
  amount: 11000,
  date: new Date(2023, 2, 28),
};

export const Item4: Story<ExpenseItemProps> = Template.bind({});
Item4.args = {
  title: 'Furniture',
  amount: 5000,
  date: new Date(2023, 5, 12),
};

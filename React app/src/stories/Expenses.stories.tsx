/* eslint-disable storybook/prefer-pascal-case */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Expenses from '../components/Expenses/Expenses';

export default {
  title: 'Components/Expenses',
  component: Expenses,
} as Meta;

interface ExpensesStoryProps {
  id: string;
  title: string;
  amount: number;
  date: Date;
  items: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

const Template: Story<ExpensesStoryProps> = (args: ExpensesStoryProps) => <Expenses {...args} />;

export const expenses1: Story<ExpensesStoryProps> = Template.bind({});
expenses1.args = {
  id: 'e1',
  title: 'Stationaries',
  amount: 1024.12,
  date: new Date(2023, 7, 14),
  items: [], // Add the 'items' property here with the appropriate value
};

export const expenses2: Story<ExpensesStoryProps> = Template.bind({});
expenses2.args = {
  id: 'e2',
  title: 'Travel Expense',
  amount: 25000,
  date: new Date(2023, 2, 12),
  items: [], // Add the 'items' property here with the appropriate value
};

export const expenses3: Story<ExpensesStoryProps> = Template.bind({});
expenses3.args = {
  id: 'e3',
  title: 'Groceries',
  amount: 11000,
  date: new Date(2023, 2, 28),
  items: [], // Add the 'items' property here with the appropriate value
};

export const expenses4: Story<ExpensesStoryProps> = Template.bind({});
expenses4.args = {
  id: 'e4',
  title: 'Furniture',
  amount: 5000,
  date: new Date(2023, 5, 12),
  items: [], // Add the 'items' property here with the appropriate value
};

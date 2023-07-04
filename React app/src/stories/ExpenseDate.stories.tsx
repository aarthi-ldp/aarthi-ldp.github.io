import React from 'react';
import { Meta, Story } from '@storybook/react';
import ExpenseDate from '../components/Expenses/ExpenseDate';

export default {
    title: 'Components/ExpenseDate',
    component: ExpenseDate,
} as Meta;

interface ExpenseDateProps{
    date: Date;
    items: {
        date: Date;
    }[];
}

const Template: Story<ExpenseDateProps> = (args) =><ExpenseDate {...args} />;

export const Date1 = Template.bind({});
Date1.args = {
    date: new Date(2023, 7, 14),
    items: [],
};

export const Date2 = Template.bind({});
Date2.args = {
    date: new Date(2023, 2, 12),
    items: [],
};

export const Date3 = Template.bind({});
Date3.args = {
    date: new Date(2023, 2, 28),
    items: [],
};

export const Date4 = Template.bind({});
Date4.args = {
    date: new Date(2023, 5, 12),
    items: [],
};
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Chips, { ChipsProps } from '../../../components/atoms/Chips/index';


export default {
    title: 'Atoms/Chips',
    component: Chips,
    argTypes: {
        label: { control: 'text' },
    },
} as Meta;

const Template: Story<ChipsProps> = (args: ChipsProps) => <Chips {...args}/>;

export const Default = Template.bind({});
Default.args = {
    label: 'CLEAR',
};

export const Consider = Template.bind({});
Consider.args = {
    label: 'CONSIDER',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
    label: 'Custom Colors',
    sx: { 
        backgroundColor: '#ff0000',
        color: '#ffffff',
    },
};

export const WithActions = Template.bind({});
WithActions.args = {
    label: 'With Actions',
    onClick: action('onClick'),
};
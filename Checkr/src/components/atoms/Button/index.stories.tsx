import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonProps } from '@mui/material/Button';
import Buttons from '../../../components/atoms/Button/index';
import { Button } from '@mui/material';
import { action } from '@storybook/addon-actions';




export default {
  title: 'Atoms/Buttons',
  component: Buttons,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['contained', 'outlined', 'text'] },
    },
    startIcon: {
      control: { type: 'text' },
    },
    text: {
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
children: 'Button',
onClick: action('onClick'),
};



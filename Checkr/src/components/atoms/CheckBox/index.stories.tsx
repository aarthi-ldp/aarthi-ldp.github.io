import React from 'react';
import { Meta, Story } from '@storybook/react';
import Checkboxes from '../../../components/atoms/CheckBox/index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms/Checkbox',
  component: Checkboxes,
} as Meta;

const Template: Story = (args) => <Checkboxes {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  label: 'Clear',
  checked: true,
  onClick: action('onClick'),
};

export const Consider = Template.bind({});
Consider.args = {
  label: 'Consider',
  checked: false,
  onChange: () => {},
};

export const AllStatus = Template.bind({});
AllStatus.args = {
  label: 'All Status',
  checked: false,
  onChange: () => {},
};

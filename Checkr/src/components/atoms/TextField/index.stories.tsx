import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Textfield, { TextfieldProps } from '../../../components/atoms/TextField/index';

export default {
  title: 'Atoms/Textfield',
  component: Textfield,
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'onChange' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<TextfieldProps> = (args: TextfieldProps) => <Textfield {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  onChange: action('onChange'),
  placeholder: 'Enter text',
  label: 'Textfield',
};

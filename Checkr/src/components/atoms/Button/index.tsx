import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface ButtonsProps extends ButtonProps {
  text: string;
}

export default function Buttons(props: ButtonsProps) {
  const { text, ...rest } = props;

  return <Button {...rest}>{text}</Button>;
}

import React from 'react';
import { render, screen } from '@testing-library/react';
import Chips from './index'; 
import theme from '../../themes';
import { ThemeProvider } from '@mui/material/styles'; 
import '@testing-library/jest-dom/extend-expect';


test('Chips renders correctly with the given label', () => {
  render(
    <ThemeProvider theme={theme}>
      <Chips label="CLEAR" />
    </ThemeProvider>
  );

  const chipsElement = screen.getByText(/CLEAR/i);
  expect(chipsElement).toBeInTheDocument();
});

test('Chips renders correctly with the given label-CONSIDER', () => {
  render(
    <ThemeProvider theme={theme}>
      <Chips label="CONSIDER" />
    </ThemeProvider>
  );

  const chipsElement = screen.getByText(/CONSIDER/i);
  expect(chipsElement).toBeInTheDocument();
});


import React from 'react';
import { render, screen } from '@testing-library/react';
import Chips from './index'; 
import theme from '../../themes';
import { ThemeProvider } from '@mui/material/styles'; 

test('Chips renders correctly with the given label', () => {
  render(
    <ThemeProvider theme={theme}>
      <Chips label="CLEAR" />
    </ThemeProvider>
  );

  const chipsElement = screen.getByText(/CLEAR/i);
  expect(chipsElement).toBeInTheDocument();
});

// test('Chips renders with the correct background color and text color based on the label', () => {
//   render(
//     <ThemeProvider theme={theme}>
//       <Chips label="CLEAR" />
//     </ThemeProvider>
//   );

//   const chipsElement = screen.getByText(/CLEAR/i);
//   //expect(chipsElement).toHaveStyle({ backgroundColor: theme.palette.accent.lightGreen });
//   expect(chipsElement).toHaveStyle({ color: theme.palette.accent.green });
// });

test('Chips renders correctly with the given label-CONSIDER', () => {
  render(
    <ThemeProvider theme={theme}>
      <Chips label="CONSIDER" />
    </ThemeProvider>
  );

  const chipsElement = screen.getByText(/CONSIDER/i);
  expect(chipsElement).toBeInTheDocument();
});

// test('Chips renders with the correct background color and text color based on the label-CONSIDER', () => {
//   render(
//     <ThemeProvider theme={theme}>
//       <Chips label="CONSIDER" />
//     </ThemeProvider>
//   );

//   const chipsElement = screen.getByText(/CONSIDER/i);
//   //expect(chipsElement).toMatchObject({ backgroundColor: theme.palette.accent.lightYellow });
//   expect(chipsElement).toHaveStyle({ color: theme.palette.accent.yellow });
// });

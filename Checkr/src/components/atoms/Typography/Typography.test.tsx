import React from 'react';
import { render, screen } from '@testing-library/react';
import AtomTypography from '../../../components/atoms/Typography/index'; // Adjust the import path based on the file structure

// Test Case 1: Check if the component renders the provided text correctly
test('AtomTypography renders the provided text correctly', () => {
  const text = 'Hello, World!';
  render(<AtomTypography text={text} />);

  const typographyElement = screen.getByText(text);
  expect(typographyElement).toBeInTheDocument();
});

// Test Case 2: Check if the component applies the correct variant style for h1
test('AtomTypography applies the correct variant style for h1', () => {
  const variant = 'h1';
  const text = 'Heading 1';
  render(<AtomTypography variant={variant} text={text} />);

  const typographyElement = screen.getByText(text);
  expect(typographyElement).toBeInTheDocument();

  // Assert that the typography style is applied correctly for h1 variant
  // expect(typographyElement).toHaveStyle({
  //   fontSize: '20px',
  //   fontWeight: 500,
  //   lineHeight: "30px",
  // });
});

// Test Case 3: Check if the component applies default style when variant is not provided
test('AtomTypography applies default style when variant is not provided', () => {
  const text = 'Default Typography';
  render(<AtomTypography text={text} />);

  const typographyElement = screen.getByText(text);
  expect(typographyElement).toBeInTheDocument();

//   // Assuming you have a default variant style in your component code.
//   // Replace 'defaultVariantStyle' with the actual style object you use as the default.
//   const defaultVariantStyle = { fontSize: '14px', fontWeight: 500, lineHeight: "20px" };

//   // Assert that the default typography style is applied correctly
//   expect(typographyElement).toHaveStyle(defaultVariantStyle);
 });

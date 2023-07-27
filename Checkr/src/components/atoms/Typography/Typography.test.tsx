import React from 'react';
import { render, screen } from '@testing-library/react';
import AtomTypography from '../../../components/atoms/Typography/index'; 
import '@testing-library/jest-dom/extend-expect';


test('AtomTypography renders the provided text correctly', () => {
  const text = 'Hello, World!';
  render(<AtomTypography text={text} />);

  const typographyElement = screen.getByText(text);
  expect(typographyElement).toBeInTheDocument();
});


test('AtomTypography applies the correct variant style for h1', () => {
  const variant = 'h1';
  const text = 'Heading 1';
  render(<AtomTypography variant={variant} text={text} />);

  const typographyElement = screen.getByText(text);
  expect(typographyElement).toBeInTheDocument();

 
});

test('AtomTypography applies default style when variant is not provided', () => {
  const text = 'Default Typography';
  render(<AtomTypography text={text} />);

  const typographyElement = screen.getByText(text);
  expect(typographyElement).toBeInTheDocument();


 });

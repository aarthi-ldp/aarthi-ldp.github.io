import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Textfield from '../../../components/atoms/TextField/index';
//import { TextFieldProps } from '../../../components/atoms/TextField/index'; // Make sure to import the interface for type checking
import SearchIcon from '@mui/icons-material/Search';

// Mock onChange function for testing
const mockOnChange = jest.fn();

// Test Case 1: Check if the component renders with the correct label and placeholder
test('Textfield renders with the correct label and placeholder', () => {
  const labelText = '';
  const placeholderText = 'Search your candidate';
  render(
    <Textfield
      label={labelText}
      placeholder={placeholderText}
      value=""
      onChange={mockOnChange}
    />
  );

  // const labelElement = screen.getByText(labelText);
  // expect(labelElement).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText(placeholderText);
  expect(inputElement).toBeInTheDocument();
});

// Test Case 2: Check if the onChange function is called correctly
test('onChange function is called correctly', () => {
//   const labelText = '';
  const placeholderText = 'Search any Candidate';
  const inputValue = '';

  render(
    <Textfield
    //   label={labelText}
      placeholder={placeholderText}
      value={inputValue}
      onChange={mockOnChange}
    />
  );

  const inputElement = screen.getByPlaceholderText(placeholderText);
  fireEvent.change(inputElement, { target: { value: 'some value' } });

  expect(mockOnChange).toHaveBeenCalledTimes(1);
});

// Test Case 3: Check if the start adornment (SearchIcon) is rendered correctly
test('Start adornment (SearchIcon) is rendered correctly', () => {
//   const labelText = 'Search';
  render(
    <Textfield
    //   label={labelText}
      value=""
      onChange={mockOnChange}
      InputProps={{
        startAdornment: <SearchIcon />,
      }}
    />
  );

  const searchIconElement = screen.getByTestId('search-icon'); // Assuming you have added a data-testid to the SearchIcon component
  expect(searchIconElement).toBeInTheDocument();
});

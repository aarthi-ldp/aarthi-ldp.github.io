import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Textfield from '../../../components/atoms/TextField/index';
import SearchIcon from '@mui/icons-material/Search';
import '@testing-library/jest-dom/extend-expect';


const mockOnChange = jest.fn();


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

 

  const inputElement = screen.getByPlaceholderText(placeholderText);
  expect(inputElement).toBeInTheDocument();
});


test('onChange function is called correctly', () => {

  const placeholderText = 'Search any Candidate';
  const inputValue = '';

  render(
    <Textfield
      placeholder={placeholderText}
      value={inputValue}
      onChange={mockOnChange}
    />
  );

  const inputElement = screen.getByPlaceholderText(placeholderText);
  fireEvent.change(inputElement, { target: { value: 'some value' } });

  expect(mockOnChange).toHaveBeenCalledTimes(1);
});


test('Start adornment (SearchIcon) is rendered correctly', () => {

  render(
    <Textfield
    
      value=""
      onChange={mockOnChange}
      InputProps={{
        startAdornment: <SearchIcon />,
      }}
    />
  );

  const searchIconElement = screen.getByTestId('search-icon'); 
  expect(searchIconElement).toBeInTheDocument();
});

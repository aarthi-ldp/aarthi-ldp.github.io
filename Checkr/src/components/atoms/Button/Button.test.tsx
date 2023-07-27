import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Buttons from './index';

test('Button renders correctly with the given text', () => {
    render(<Buttons text="Click Me" />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });
  
  test('Button calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Buttons text="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click Me/i);
  
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
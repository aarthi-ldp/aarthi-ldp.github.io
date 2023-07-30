
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import CheckboxLabels from '../../../components/atoms/CheckBox/index';


describe('CheckboxLabels', () => {
  test('should render a checkbox with the specified label', () => {
   
    render(<CheckboxLabels />);

  
    const checkbox = screen.getByLabelText('Label');

   
    expect(checkbox).toBeInTheDocument();

    
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

  
    expect(checkbox).toBeChecked();
  });
});

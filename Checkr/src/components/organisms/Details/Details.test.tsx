import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Details from '../../../components/organisms/Details/index';
import '@testing-library/jest-dom/extend-expect';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Details', () => {
  it('should render the component with candidate information', () => {
    const { getAllByText } = render(<Details />);
    const johnSmithElements = getAllByText('John Smith');
    expect(johnSmithElements).toHaveLength(2); 

    
    johnSmithElements.forEach((element) => {
      expect(element).toBeInTheDocument();
      
    });
  });

  it('should trigger navigation to "/pre-adverse" when "Pre-Adverse Action" button is clicked', () => {
    const { getByText } = render(<Details />);
    fireEvent.click(getByText('Pre-Adverse Action'));
    expect(mockNavigate).toHaveBeenCalledWith('/pre-adverse');
  });
});

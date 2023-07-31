import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom/extend-expect';

describe('Footer Component', () => {
    test('renders the avatar with the correct alt text', () => {
      const { getByAltText } = render(<Footer />);
      const avatar = getByAltText('Avatar');
      expect(avatar).toBeInTheDocument();
    });
  
    test('displays the correct name and company name', () => {
      const { getByText } = render(<Footer />);
      const name = getByText('James Rodriguez');
      const companyName = getByText('James.co');
      expect(name).toBeInTheDocument();
      expect(companyName).toBeInTheDocument();
    });
  
    test('renders the logout icon', () => {
        const { getByTestId } = render(<Footer />);
        const logoutIcon = getByTestId('logout-icon');
        expect(logoutIcon).toBeInTheDocument();
      });
      
  });
  
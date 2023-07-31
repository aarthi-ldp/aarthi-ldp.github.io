import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../../../components/organisms/tabledata/index';
import '@testing-library/jest-dom/extend-expect';

// Mock the components used inside Table component (if necessary)
jest.mock('../../../components/molecules/table/index', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-table-molecule" />,
    TableData: [],
  };
});

interface LayoutProps {
  children: ReactNode;
}

jest.mock('../../../components/templates/Layout/index', () => {
  return {
    __esModule: true,
    default: ({ children }: LayoutProps) => <div data-testid="mock-layout">{children}</div>,
  };
});


describe('Table Component', () => {
  it('renders the table component', () => {
    render(<Table />);
   
    expect(screen.getByTestId('mock-table-molecule')).toBeInTheDocument();
  });

  it('renders the layout component', () => {
    render(<Table />);
    
    expect(screen.getByTestId('mock-layout')).toBeInTheDocument();
  });

});

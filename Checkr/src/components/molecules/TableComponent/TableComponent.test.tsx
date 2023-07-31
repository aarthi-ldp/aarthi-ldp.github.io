import React from 'react';
import { render, screen } from '@testing-library/react';
import TableComponent from '../../../components/molecules/TableComponent/index'; // Adjust the import path based on your file structure
import '@testing-library/jest-dom/extend-expect';

describe('TableComponent', () => {
  const data = [
    { search: 'Item 1', status: { label: 'CONSIDER' }, date: '2023-07-30' },
    { search: 'Item 2', status: { label: 'CLEAR' }, date: '2023-07-31' },
    // Add more data for testing as needed
  ];

  test('should render table headers correctly', () => {
    render(<TableComponent data={data} />);

    const searchHeader = screen.getByText('SEARCH');
    const statusHeader = screen.getByText('STATUS');
    const dateHeader = screen.getByText('DATE');

    expect(searchHeader).toBeInTheDocument();
    expect(statusHeader).toBeInTheDocument();
    expect(dateHeader).toBeInTheDocument();
  });

  test('should render table data correctly', () => {
    render(<TableComponent data={data} />);

    // Check that each data item is rendered correctly
    data.forEach((item) => {
      const searchCell = screen.getByText(item.search);
      const statusCell = screen.getByText(item.status.label);
      const dateCell = screen.getByText(item.date);

      expect(searchCell).toBeInTheDocument();
      expect(statusCell).toBeInTheDocument();
      expect(dateCell).toBeInTheDocument();
    });
  });

  test('should integrate Chips component correctly', () => {
    render(<TableComponent data={data} />);

    // Check that Chips component with correct label is rendered for each data item
    data.forEach((item) => {
      const chipsComponent = screen.getByText(item.status.label);
      expect(chipsComponent).toBeInTheDocument();
    });
  });

  // Add more test cases as needed to cover other parts of the component
});

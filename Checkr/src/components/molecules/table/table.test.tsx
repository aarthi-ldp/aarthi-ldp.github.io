import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableMolecule from '../../../components/molecules/table/index'; // Adjust the import path based on your file structure
import '@testing-library/jest-dom/extend-expect';
// Mock any required dependencies if needed

describe('TableMolecule', () => {
  const headerLabels = ['Name', 'Adjusdiction', 'Status', 'Location', 'Date'];
  const tableData = [
    {
      id: 1,
      name: 'John Doe',
      adjusdiction: 'USA',
      status: { label: 'CLEAR' },
      location: 'New York',
      date: '2023-07-30',
    },
    // Add more data for testing as needed
  ];

  test('should render TableMolecule with correct props', () => {
    render(<TableMolecule headerLabels={headerLabels} tableData={tableData} />);

    // Assert the presence of the header
    const headerElement = screen.getByText('Candidate Information');
    expect(headerElement).toBeInTheDocument();

    // Assert the presence of the table headers
    for (const label of headerLabels) {
      const headerCell = screen.getByText(label);
      expect(headerCell).toBeInTheDocument();
    }

    // Assert the presence of the table data
    for (const row of tableData) {
      const nameCell = screen.getByText(row.name);
      const adjusdictionCell = screen.getByText(row.adjusdiction);
      const statusCell = screen.getByText(row.status.label);
      const locationCell = screen.getByText(row.location);
      const dateCell = screen.getByText(row.date);
      expect(nameCell).toBeInTheDocument();
      expect(adjusdictionCell).toBeInTheDocument();
      expect(statusCell).toBeInTheDocument();
      expect(locationCell).toBeInTheDocument();
      expect(dateCell).toBeInTheDocument();
    }
  });

  test('should handle search functionality', () => {
    //render(<TableMolecule headerLabels={headerLabels} tableData={tableData} />);

    // Type in the search field
    const searchInput = screen.getByPlaceholderText('Search any Candidate');
    fireEvent.change(searchInput, { target: { value: 'John' } });

    // Check that only the row with name 'John Doe' is present after search
    const filteredRow = screen.getByText('John Doe');
    expect(filteredRow).toBeInTheDocument();

    // Check that other rows are not present after search
    for (const row of tableData) {
      if (row.name !== 'John Doe') {
        const notPresentRow = screen.queryByText(row.name);
        expect(notPresentRow).not.toBeInTheDocument();
      }
    }
  });

  test('should handle filter dialog opening and closing', () => {
    //render(<TableMolecule headerLabels={headerLabels} tableData={tableData} />);

    // Check that the filter dialog is initially closed
    const filterDialog = screen.queryByText('Filter Status');
    expect(filterDialog).not.toBeInTheDocument();

    // Click on the filter button
    const filterButton = screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'button' && /Filter/i.test(content);
      });
      fireEvent.click(filterButton);

    // Check that the filter dialog is now open
    expect(screen.getByText('Filter Status')).toBeInTheDocument();

    // Close the filter dialog
    const closeButton = screen.getByRole('button', { name: /Close/i });
    fireEvent.click(closeButton);

    // Check that the filter dialog is now closed
    expect(screen.queryByText('Filter Status')).not.toBeInTheDocument();
  });

  test('should handle filter functionality', () => {
    //render(<TableMolecule headerLabels={headerLabels} tableData={tableData} />);

    // Click on the filter button
    const filterButton = screen.getByRole('button', { name: /Filter/i });
    fireEvent.click(filterButton);

    // Select 'CONSIDER' option in the filter dialog
    const considerCheckbox = screen.getByLabelText('Consider');
    fireEvent.click(considerCheckbox);

    // Close the filter dialog
    const closeButton = screen.getByRole('button', { name: /Close/i });
    fireEvent.click(closeButton);

    // Check that only the row with status 'CONSIDER' is present after filtering
    const filteredRow = screen.getByText('John Doe');
    expect(filteredRow).toBeInTheDocument();

    // Check that other rows are not present after filtering
    for (const row of tableData) {
      if (row.status.label !== 'CONSIDER') {
        const notPresentRow = screen.queryByText(row.name);
        expect(notPresentRow).not.toBeInTheDocument();
      }
    }
  });

  // Add more test cases as needed to cover other parts of the component
});

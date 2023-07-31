import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TableMolecule from '../../../components/molecules/table/index';
import '@testing-library/jest-dom/extend-expect';

describe('TableMolecule', () => {
  const headerLabels = ['Name', 'Adjusdiction', 'Status', 'Location', 'Date'];
  const tableData = [
    { id: 1, name: 'John Smith', adjusdiction: '-', status: { label: 'CLEAR' }, location: 'Barrouallie', date: '2/22/2022' },
    
  ];

  test('should render the table with the correct headers and data', () => {
    const { getByText } = render(<TableMolecule headerLabels={headerLabels} tableData={tableData} />);

    // Check if the table headers are rendered correctly
    headerLabels.forEach((label) => {
      expect(getByText(label)).toBeInTheDocument();
    });

    // Check if the table data is rendered correctly
    tableData.forEach((row) => {
      expect(getByText(row.name)).toBeInTheDocument();
      expect(getByText(row.adjusdiction)).toBeInTheDocument();
      expect(getByText(row.status.label)).toBeInTheDocument();
      expect(getByText(row.location)).toBeInTheDocument();
      expect(getByText(row.date)).toBeInTheDocument();
    });
  });

//   it('should apply search filter and display filtered data', () => {
//     const { getByLabelText, getByText, queryByText } = render(<TableMolecule headerLabels={headerLabels} tableData={tableData} />);

//     // Check if all table rows are initially rendered
//     tableData.forEach((row) => {
//       expect(getByText(row.name)).toBeInTheDocument();
//     });

//     // Perform a search by entering "John" in the search field
//     const searchInput = getByLabelText('Search any Candidate');
//     fireEvent.change(searchInput, { target: { value: 'John' } });

//     // Check if the table rows are correctly filtered based on the search input
//     expect(queryByText('John Smith')).toBeInTheDocument();
//     expect(queryByText('-')).toBeInTheDocument();

//     // Check if other rows that do not match the search input are not present
//     expect(queryByText('Jane Doe')).not.toBeInTheDocument();
//     expect(queryByText('Another Sample')).not.toBeInTheDocument();
//   });

  
});

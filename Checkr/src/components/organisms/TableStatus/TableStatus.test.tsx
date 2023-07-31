import React from 'react';
import { render, screen } from '@testing-library/react';
import TableStatus from '../../../components/organisms/TableStatus/index';
import '@testing-library/jest-dom/extend-expect';



jest.mock('../../../components/molecules/TableComponent/index', () => {
  return {
    __esModule: true,
    default: ({ data }: { data: any[] }) => (
      <div data-testid="mock-table-component">
        {JSON.stringify(data)}
      </div>
    ),
  };
});


describe('TableStatus Component', () => {
  it('renders the TableComponent with the correct data', () => {
    const data = [
      { search: "SSN Verification", status: { label: "CLEAR" }, date: '2/22/2022' },
      { search: "Sex Offender", status: { label: "CLEAR" }, date: '3/13/2022' },
      { search: "Global Watchlist", status: { label: "CONSIDER" }, date: '7/2/2022' },
      { search: "Federal Criminal", status: { label: "CLEAR" }, date: '2/20/2022' },
      { search: "County Criminal", status: { label: "CLEAR" }, date: '5/19/2022' },
    ];

    render(<TableStatus />);

    expect(screen.getByTestId('mock-table-component')).toBeInTheDocument();

    expect(screen.getByText(JSON.stringify(data))).toBeInTheDocument();
  });

 });
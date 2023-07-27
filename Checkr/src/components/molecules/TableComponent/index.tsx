import React from 'react';
import Chips from '../../../components/atoms/Chips/index';
import theme from '../../../components/themes/index';

// Define the type for the data prop
type TableData = {
  search: string;
  status: {
    label:string;
  };
  date: string;
  // Add more properties as needed
};

// Define the type for the props of the TableComponent
type TableComponentProps = {
  data: TableData[];
};

const TableComponent = ({ data }: TableComponentProps) => {
  return (
    <table style={{width: '100%', height: '282px',borderCollapse: 'collapse',border: `1px solid ${theme.palette.structural.stroke}`,}}>
      <thead>
        <tr style={{
            backgroundColor: theme.palette.structural.stroke,
            fontFamily: theme.typography.body2.fontFamily,
            // color: 'white',
            borderBottom: `1px solid ${theme.palette.structural.stroke}`, // Horizontal line below the header
          }}
        >
          <th>SEARCH</th>
          <th>STATUS</th>
          <th>DATE</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: TableData) => (
          <tr key={item.search}
          style={{
            borderBottom:  `1px solid ${theme.palette.structural.stroke}`,}}> 
            <td style={{ color: theme.palette.primary.primary500,textAlign: 'center' }}>{item.search}</td>
            <td style={{textAlign: 'center'}}>
                <Chips label={item.status.label} />
            </td>
            <td style={{textAlign: 'center'}}>{item.date}</td>
            {/* Add more table cells for other data properties */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

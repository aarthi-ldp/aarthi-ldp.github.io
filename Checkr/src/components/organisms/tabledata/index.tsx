import React from 'react';
import { Box } from '@mui/material';
import TableMolecule  from '../../../components/molecules/table/index';
import { ThemeProvider } from '@mui/material/styles'; 
import { TableData } from '../../../components/molecules/table/index';
import theme from '../../../components/themes/index';
import Layout from '../../../components/templates/Layout/index';

const Table =() => {
    const headerLabels = ['NAME', 'ADJUSDICTION', 'STATUS', 'LOCATION', 'DATE'];

    const tableData:TableData[]= [
        {  
            id:1,
            name: 'John Smith',
            adjusdiction: '-', 
            status:{label: 'CLEAR'}, 
            location: 'Barrouallie', 
            date: '2/22/2022', 
        },

        {  
            id:2,
            name: 'Serene', 
            adjusdiction: '-', 
            status:{label: 'CLEAR'}, 
            location: 'Vanersborg', 
            date: '3/13/2022' ,
        },

        {  
            id:3,
            name: 'Walsh', 
            adjusdiction: '-', 
            status:{label: 'CONSIDER'}, 
            location: 'Sukamanah', 
            date: '7/2/2022', 
        },

        {  
            id:4,
            name: 'Maurizia', 
            adjusdiction: '-', 
            status:{label: 'CLEAR'}, 
            location: 'Sukamanah', 
            date: '2/20/2022', 
        },

        {  
            id:5,
            name: 'Kendre', 
            adjusdiction: '-', 
            status:{label: 'CLEAR'}, 
            location: 'Beutong Ateuh', 
            date: '5/19/2022', 
        },

        {  
            id:6,
            name: 'Erastus', 
            adjusdiction: '-', 
            status:{label: 'CLEAR'}, 
            location: 'Hoviyn Am', 
            date: '12/1/2022', 
        },

        {  
            id:7,
            name: 'Jereme', 
            adjusdiction: '-', 
            status:{label: 'CONSIDER'}, 
            location: 'Sharingol', 
            date: '7/26/2022', 
        },

        {  
            id:8,
            name: 'John Smith', 
            adjusdiction: '-', 
            status:{label: 'CONSIDER'}, 
            location: 'Lianyun', 
            date: '5/28/2022', 
        },

        {  
            id:9,
            name: 'Cari', 
            adjusdiction: '-', 
            status:{label: 'CLEAR'}, 
            location: 'Taboao da Serra', 
            date: '5/23/2022', 
        },

        {  
           id:10,
            name: 'Kimble', 
            adjusdiction: '-', 
            status:{label: 'CONSIDER'}, 
            location: 'Veseli nad Moravou', 
            date: '8/24/2022'
        }

    ];
    return (
        <Layout>
        
    <ThemeProvider theme={theme}>
         <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
<Box sx={{
             width: '1056px', 
             height: '570px', 
             top: '60px' 
             }}>     
     
     <TableMolecule headerLabels={headerLabels} 
     tableData={tableData}/>
     </Box>
      </Box> 
    </ThemeProvider>
    </Layout>
   
    );
    };

export default Table;

import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Dialog, DialogTitle, DialogContent,ThemeProvider, Box } from '@mui/material';
import Chips from '../../../components/atoms/Chips/index';
import theme from '../../../components/themes/index';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { MoreVertOutlined } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Textfield from '../../../components/atoms/TextField/index';
import InputAdornment from '@mui/material/InputAdornment';
import Buttons from '../../../components/atoms/Button/index';
import CheckboxBox from '../../../components/organisms/FilterDialog/index';
import AtomTypography from '../../atoms/Typography';
import { Link } from 'react-router-dom';


export interface TableData {
  id: number;
  name: string;
  adjusdiction: string;  
  status: {
    label: string;
  
  };
  location: string;
  date: string;
}

interface TableMoleculeProps {
  headerLabels: string[];
  tableData: TableData[];

}

const TableMolecule: React.FC<TableMoleculeProps> = (props) => {
  const { headerLabels, tableData } = props;
  const [searchValue, setSearchValue] = useState('');
  const [openFilter, setopenFilter] = useState(false);
  const [filteredData, setFilteredData] = useState(tableData);

  const [checkedItems, setcheckedItems] = useState({
    allStatus: true,
    clear: false,
    consider: false,
  });


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);

    const filteredTableData = tableData.filter((row) => row.name.toLowerCase().includes(value)
    );
    setFilteredData(filteredTableData);
  };

  const handleFilterClick = () => {
    setopenFilter(true);
  };

  const handleFilterClose = () => {
    setopenFilter(false);
  };

  const handleFilterApply = (checkedItems: any) => {
    const filteredTableData = tableData.filter((row) => {
      if (checkedItems.allStatus) {
        return true;
      }
      if (checkedItems.clear && row.status.label === 'CLEAR') {
        return true;
      }

      if (checkedItems.consider && row.status.label === 'CONSIDER') {
        return true;
      }
      return false;
    });
    setcheckedItems(checkedItems);
    setFilteredData(filteredTableData);
   
  };

  return (
    
    <div>
    <AtomTypography variant="h1" text = "Candidates"/>
   
   

    <TableContainer component={Paper}>
      
      
      <Table>
      
        <TableHead>
          
          <TableRow>
            <TableCell colSpan={headerLabels.length + 1} align="left" height ="">
              <ThemeProvider theme={theme}>
              <Box sx={{ display: 'flex', alignItems: 'right', justifyContent:'space-between' }}>
              
                <AtomTypography variant="subtitle1" text= "Candidate Information" fontWeight= "bold"/>
                  
                  <Stack direction="row" spacing={1}>
                    <Textfield
                      value={searchValue}
                      onChange={handleSearchChange}
                      placeholder="Search any Candidate"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Buttons variant="outlined" startIcon={<FilterListIcon />} text="Filter" onClick={handleFilterClick} />
                    <IconButton aria-label="More">
                    <MoreVertOutlined />

                    </IconButton>
                  </Stack>
                 
                </Box>
              </ThemeProvider>
            </TableCell>
          </TableRow>
          <TableRow sx={{ backgroundColor: theme.palette.structural.stroke, fontFamily: theme.typography.body2.fontFamily }}>
            {headerLabels.map((label: string) => (
              <TableCell key={label}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ color: theme.palette.primary.primary500 }}>
                <Link to={`/details`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {row.name}
                </Link>
                </TableCell>
              <TableCell>{row.adjusdiction}</TableCell>
              <TableCell>
                <Chips label={row.status.label} />
              </TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={openFilter} onClose={handleFilterClose}>
        <DialogTitle>Filter Status</DialogTitle>
        <DialogContent>
          <CheckboxBox onApply={handleFilterApply} checkedItems={checkedItems} />
        </DialogContent>
      </Dialog>
    </TableContainer>
    </div>
  );
};

export default TableMolecule;

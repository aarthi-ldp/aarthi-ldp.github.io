import React from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../../components/atoms/Button/index';
import Stack from '@mui/material/Stack';
import Layout from '../../../components/templates/Layout/index';
import theme from '../../../components/themes/index'; 
import { Box } from '@mui/material';
import TableStatus from '../../../components/organisms/TableStatus/index';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardArray from '../../molecules/Card';
import CardArray2 from '../../../components/molecules/CardArray2/index';
import Iconography from '../../../components/molecules/Iconography/index';
//import AtomTypography from '../../atoms/Typography';
//import { useHistory } from 'react-router-dom';

export const Details = () => {
  const navigate = useNavigate();

  const handlePreAdverseAction = () => {
    navigate('/pre-adverse'); // Navigate to the PreAdverse page
  };

  return (
    <div style={pageContainerStyle}>
      <Layout>
        <Stack spacing={2} direction="row">
          <header style={headerStyle}>
            <div style={{ flex: 1, ...userInfoStyle }}>John Smith</div>
            <div style={buttonsContainerStyle}>
              <Buttons variant="outlined" text="Pre-Adverse Action" onClick={handlePreAdverseAction} sx={{backgroundColor: theme.palette.structural.white,textTransform:'none',borderColor:'darkgrey',color:theme.palette.structural.iconDark}}/>
              <Buttons variant="contained" text="Engage" sx={{backgroundColor: theme.palette.primary.primary500,textTransform:'none'}} />
            </div>
          </header>
        </Stack>
        <br/>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            Candidate Information
          </AccordionSummary>
          <AccordionDetails>
           <CardArray/>
          </AccordionDetails>
        </Accordion>
        <br/>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            Report Information
            
          </AccordionSummary>
          <AccordionDetails>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {CardArray2.map((card, index) => (
              <Box key={index} sx={{ flexBasis: '30%', border: '1px solid #ccc', padding: '10px', marginBottom: '10px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)'}}>
              <Iconography

              key={index}
              iconComponent={card.iconComponent}
              iconAlt={card.iconAlt}
              text1={card.text1}
              text2={card.text2}
              />
              </Box>
              ))}
              </Box>
          </AccordionDetails>
        </Accordion>

       <Box sx={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          height: '100vh',
        }}>
          <Box sx={{
            width: '1059px', 
            height: '570px', 
            top: '30px' 
          }}>  
            <div>
            
              <TableStatus/>
              
            </div>
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

const pageContainerStyle = {
  paddingTop: '50px', // Adjust the top padding to leave space at the top
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  background: '#f5f5f5',
  padding: '16px',
  width: '90%',
  height: '20px',
};

const userInfoStyle = {
  fontWeight: 'Normal',
  fontSize: '18px',
};

const buttonsContainerStyle = {
  display: 'flex',
  gap: '10px',
};

export default Details;

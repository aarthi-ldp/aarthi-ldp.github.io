import React from 'react';
import Footer from '../../molecules/SideBarItems/Footer';
import { Grid, List, ListItem, ListItemText, Typography, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import GridViewIcon from '@mui/icons-material/GridView';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';


const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          width: '238px',
          height: '100vh', 
          backgroundColor: '#f5f5f5',
          boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)',
          margin: '20px',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#e0e0e0',
            cursor: 'pointer',
          },
        },
        button: {
          '&:hover': {
            backgroundColor: 'lightblue',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          '&:hover': {
            color: 'blue', 
          },
        },
      },
    },
  },
});

export default function Sidebar() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" height="100%">
        <Typography variant="h6" component="div" sx={{ p: 2 }}>
          RECRUIT
        </Typography>
        <List sx={{ width: '206px', height: 'calc(100% - 56px)', padding: 0, margin: 0 }}>
          <ListItem button>
            <GridViewIcon />
           
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button>
            <ContactsOutlinedIcon />
            <ListItemText primary="Candidates" />
          </ListItem>

          <ListItem button>
            <GavelOutlinedIcon />
            <ListItemText primary="Adverse Actions" />
          </ListItem>

          <ListItem button>
            <DescriptionOutlinedIcon />
            <ListItemText primary="Logs" />
          </ListItem>

          <ListItem button>
            <InsertChartOutlinedIcon />
            <ListItemText primary="Analytics" />
          </ListItem>

          <ListItem button>
            <ManageAccountsOutlinedIcon />
            <ListItemText primary="Account" />
          </ListItem>

          <ListItem button>
            <WysiwygOutlinedIcon />
            <ListItemText primary="Screenings" />
          </ListItem>
        </List>
        
        <Footer/>
      </Grid>
    </ThemeProvider>
  );
}

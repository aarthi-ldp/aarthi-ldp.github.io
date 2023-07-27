import React from 'react';
//import SideBar from './components/organisms/SideBar/index';
import Table from './components/organisms/tabledata/index';
import './App.css';
import { ThemeProvider } from '@mui/material/styles'; 
import theme  from './components/themes/index';
//import Layout from './components/templates/Layout/index';
import Details  from './components/organisms/Details/index';
import PreAdverse  from './components/organisms/PreAdverse/index';
import {Routes, Route} from 'react-router-dom';

//  function TablePage() {
//   return <Table/>;
//  }

function App() {
  return (
    <ThemeProvider theme = {theme} >
      <div className="App">
      <Routes>
        <Route path='/' element={<Table/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/pre-adverse' element={<PreAdverse/>}/>
      </Routes>
      
     {/* <Table/> */}
    {/* <Details/>  */}
     

    {/* <PreAdverse/>  */}
     </div>
    
    
     
   
     </ThemeProvider>
  );
};
export default App;

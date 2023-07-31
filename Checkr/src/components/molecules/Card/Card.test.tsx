import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import CardArray from '../../../components/molecules/Card/index';
import '@testing-library/jest-dom/extend-expect';
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // Import the necessary icons here
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShieldIcon from '@mui/icons-material/Shield';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

jest.mock('../Iconography', () => () => <div data-testid="mock-iconography" />);

describe('CardArray', () => {
  const cards = [
    {  id:1, iconComponent: AccountBoxIcon, iconAlt: 'Account Icon', text1: 'Name', text2: 'John Smith' },
  {  id:2, iconComponent: MailOutlineIcon, iconAlt: 'Mail Icon', text1: 'Email', text2: 'John.smith@checkr.com' },
  {  id:3, iconComponent: EventNoteIcon, iconAlt: 'Event Icon', text1: 'DOB', text2: '1990-09-10(26)' },
  {  id:4, iconComponent: PhoneIcon, iconAlt: 'Phone Icon', text1: 'Phone', text2: '(555) 555-5555' },
  {  id:5, iconComponent: LocationOnIcon, iconAlt: 'Location Icon', text1: 'Zipcode', text2: '94158' },
  {  id:6, iconComponent: ShieldIcon, iconAlt: 'Shield Icon', text1: 'Social Security', text2: 'XXX-XX-6789' },
  {  id:7, iconComponent: EventNoteIcon, iconAlt: 'Drivers License Icon', text1: 'Drivers License', text2: 'FTEST1111(CA)' },
  {  id:8, iconComponent: CalendarTodayIcon, iconAlt: 'Calendar Icon', text1: 'Created At', text2: 'Nov 29, 2016 11:05:57 AM' },
   
  ];

  it('should render all cards with correct data', () => {
    const { getByTestId, getByText, debug } = render(<CardArray />);
    
   
    const cardElements = getByTestId('card-element');
    expect(cardElements.children.length).toBe(cards.length);

    
    
    
  });

});

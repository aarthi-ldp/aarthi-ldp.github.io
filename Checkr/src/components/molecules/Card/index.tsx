import React from 'react';
import Iconography from '../Iconography';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShieldIcon from '@mui/icons-material/Shield';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box } from '@mui/material';

const Card = [
  { iconComponent: AccountBoxIcon, iconAlt: 'Account Icon', text1: 'Name', text2: 'John Smith' },
  { iconComponent: MailOutlineIcon, iconAlt: 'Mail Icon', text1: 'Email', text2: 'John.smith@checkr.com' },
  { iconComponent: EventNoteIcon, iconAlt: 'Event Icon', text1: 'DOB', text2: '1990-09-10(26)' },
  { iconComponent: PhoneIcon, iconAlt: 'Phone Icon', text1: 'Phone', text2: '(555) 555-5555' },
  { iconComponent: LocationOnIcon, iconAlt: 'Location Icon', text1: 'Zipcode', text2: '94158' },
  { iconComponent: ShieldIcon, iconAlt: 'Shield Icon', text1: 'Social Security', text2: 'XXX-XX-6789' },
  { iconComponent: EventNoteIcon, iconAlt: 'Drivers License Icon', text1: 'Drivers License', text2: 'FTEST1111(CA)' },
  { iconComponent: CalendarTodayIcon, iconAlt: 'Calendar Icon', text1: 'Created At', text2: 'Nov 29, 2016 11:05:57 AM' },
];

const CardArray = () => {
  return (
    <Box display ="flex" flexWrap="wrap" gap={2} >
    
      {Card.map((card, index) => (
          <Box key={index} sx={{ flexBasis: '30%',border: '1px solid #ccc', padding: '10px', marginBottom: '10px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
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
  );
};

export default CardArray;

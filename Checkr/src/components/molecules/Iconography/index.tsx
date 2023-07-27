import React from 'react';
import Icon from '../../../components/atoms/Icons/index';
import { Typography } from '@mui/material';

interface IconographyProps {
  iconComponent: React.ElementType;
  iconAlt: string;
  text1: string;
  text2: string;
  sx?: any;
}

const Iconography: React.FC<IconographyProps> = ({ iconComponent, iconAlt, text1, text2 }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'left'}}>
      <Icon iconComponent={iconComponent} alt={iconAlt}/>

      <div style={{ marginLeft: '10px', textAlign: 'left', color: 'gray'}}>
        <Typography variant="body1" paragraph>
          {text1}
        </Typography>

        <Typography variant="body2" paragraph>
          {text2}
        </Typography>
      </div>
    </div>
  );
};

export default Iconography;

import React from 'react';
import { Avatar, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function  Footer () {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
        <Avatar src="./assets/avatar.svg" alt="Avatar" />
        <div style={{ marginLeft: '8px' }}>
          <Typography variant="body1">
            James Rodriguez
          </Typography>
          <Typography variant="caption" color="textSecondary">
           James.co
          </Typography>
        </div>
        <LogoutIcon style={{ marginLeft: '8px' }} />
      </div>
    );
  };
  
  // export default UserProfile;
  
  
  
  
  
  
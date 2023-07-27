import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './index'; 
import SearchIcon from '@mui/icons-material/Search';
import '@testing-library/jest-dom/extend-expect'; 

test('Icon renders the provided icon component correctly', () => {
  const dataTestId = 'search-icon'; 

  render(<Icon iconComponent={SearchIcon} dataTestId={dataTestId} />); 
  
  const renderedIcon = screen.getByTestId(dataTestId);

  
  expect(renderedIcon).toBeInTheDocument();

  
  expect(renderedIcon.tagName).toBe('svg'); 
});

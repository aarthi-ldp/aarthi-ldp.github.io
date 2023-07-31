import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '../../../components/organisms/SideBar/index';
import '@testing-library/jest-dom/extend-expect';

describe('Sidebar', () => {
  it('should render the component with all the sidebar items', () => {
    render(<Sidebar />);

   
    expect(screen.getByTestId('Home')).toBeInTheDocument();
    expect(screen.getByTestId('Candidates')).toBeInTheDocument();
    expect(screen.getByTestId('Adverse Actions')).toBeInTheDocument();
    expect(screen.getByTestId('Logs')).toBeInTheDocument();
    expect(screen.getByTestId('Analytics')).toBeInTheDocument();
    expect(screen.getByTestId('Account')).toBeInTheDocument();
    expect(screen.getByTestId('Screenings')).toBeInTheDocument();
  });

  it('should have correct icons for each sidebar item', () => {
    render(<Sidebar />);

  
    expect(screen.getByTestId('Home')).toBeInTheDocument();
    expect(screen.getByTestId('Candidates')).toBeInTheDocument();
    expect(screen.getByTestId('Adverse Actions')).toBeInTheDocument();
    expect(screen.getByTestId('Logs')).toBeInTheDocument();
    expect(screen.getByTestId('Analytics')).toBeInTheDocument();
    expect(screen.getByTestId('Account')).toBeInTheDocument();
    expect(screen.getByTestId('Screenings')).toBeInTheDocument();
  });
  
  });




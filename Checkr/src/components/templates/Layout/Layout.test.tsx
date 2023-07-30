import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../../../components/templates/Layout/index'; 
import SideBar from '../../../components/organisms/SideBar/index';
import '@testing-library/jest-dom/extend-expect';

describe('Layout', () => {
  test('should render SideBar correctly', () => {
    render(<Layout>Test Children</Layout>);

    // Assert the presence of the SideBar component
    const sideBarElement = screen.getByTestId('Sidebar');
    expect(sideBarElement).toBeInTheDocument();

    // You can also check other properties or children of the SideBar if needed
  });

  test('should render children correctly', () => {
    render(<Layout>Test Children</Layout>);

    // Assert the presence of the children components
    const childrenElement = screen.getByText('Test Children');
    expect(childrenElement).toBeInTheDocument();

    // You can add additional checks on children if needed
  });

});

//   test('should apply flex layout', () => {
//     render(<Layout>Test Children</Layout>);

//     // Check that the layout is using flex
//     const layoutElement = screen.getByTestId('layout');
//     expect(layoutElement).toHaveStyle('display: flex;');

//     // Check that the SideBar takes one part of the width (flex: 1)
//     const sideBarElement = screen.getByTestId('sideBar');
//     expect(sideBarElement).toHaveStyle('flex: 1;');

//     // Check that the children take the remaining width (flex: 5)
//     const childrenElement = screen.getByTestId('children');
//     expect(childrenElement).toHaveStyle('flex: 5;');
//   });
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import SidebarItem from '../../../components/molecules/SideBarItems/index'; // Adjust the import path based on your file structure
import '@testing-library/jest-dom/extend-expect';

describe('SidebarItem', () => {
  test('should render SidebarItem with correct props', () => {
    // Mock props for SidebarItem
    const icon = 'fa fa-home';
    const title = 'Home';

    // Render the component
    render(<SidebarItem icon={icon} title={title} />);

    // Find the rendered SidebarItem element based on its text content
    const sidebarItemElement = screen.getByText(title);

    // Assert that the SidebarItem element is rendered
    expect(sidebarItemElement).toBeInTheDocument();

    // Assert that the icon and title props are rendered correctly
    expect(sidebarItemElement).toHaveAttribute('data-icon', icon);
    expect(sidebarItemElement.textContent).toBe(title);
  });
});

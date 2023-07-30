import React from 'react';
import { render, screen } from '@testing-library/react';
import Iconography from '../../../components/molecules/Iconography/index';


jest.mock('../../../components/atoms/Icons/index', () => {
  return (props: { iconComponent: React.ElementType; alt: string }) => <div data-testid="iconMock">{JSON.stringify(props)}</div>;
});

describe('Iconography', () => {
  test('should render Icon and Typography with correct props', () => {
    const iconComponent = () => <span>Icon Component</span>;
    const iconAlt = 'Alt Text';
    const text1 = 'Text 1';
    const text2 = 'Text 2';

    
    render(
      <Iconography iconComponent={iconComponent} iconAlt={iconAlt} text1={text1} text2={text2} />
    );

    
    const iconElement = screen.getByTestId('iconMock');
    const typographyElement1 = screen.getByText(text1);
    const typographyElement2 = screen.getByText(text2);

    
    expect(iconElement.textContent).toContain(JSON.stringify({ iconComponent, alt: iconAlt }));

   
    expect(typographyElement1.textContent).toBe(text1);
    expect(typographyElement2.textContent).toBe(text2);
  });
});

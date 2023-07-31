import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckboxTypographyMolecule from '../../../components/molecules/FilterCheckbox/index';

jest.mock('../../../components/atoms/CheckBox/index', () => {
  return (props: { label: string; checked: boolean }) => (
    <div data-testid="checkboxMock">{JSON.stringify(props)}</div>
  );
});

jest.mock('../../../components/atoms/Typography/index', () => {
  return (props: { text: string; variant: string }) => (
    <div data-testid="typographyMock">{JSON.stringify(props)}</div>
  );
});

describe('CheckboxTypographyMolecule', () => {
  test('should render Checkboxes and AtomTypography with correct props', () => {
    const checkboxProps = { label: 'Checkbox Label', checked: true };
    const typographyProps = { text: 'Typography Text', variant: 'h6' };

    render(
      <CheckboxTypographyMolecule checkboxProps={checkboxProps} typographyProps={typographyProps} />
    );

    const checkboxElement = screen.getByTestId('checkboxMock');
    const typographyElement = screen.getByTestId('typographyMock');

    expect(checkboxElement.textContent).toContain(JSON.stringify(checkboxProps));
    expect(typographyElement.textContent).toContain(JSON.stringify(typographyProps));
  });
});

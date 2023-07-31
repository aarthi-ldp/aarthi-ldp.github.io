import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PreAdverse from '../../../components/organisms/PreAdverse/index';
import PreviewModal from '../PreviewModal';

describe('PreAdverse', () => {
  it('should render the component without errors', () => {
    render(<PreAdverse />);
  });

 


//   it('should enable the "Preview Notice" button when a checkbox is checked', () => {
//     render(<PreAdverse />);
//     const checkbox = screen.getByLabelText('Assault Domestic Violence');
//     const previewButton = screen.getByText('Preview Notice');
//     expect(previewButton).toBeDisabled();
//     fireEvent.click(checkbox);
//     expect(previewButton).not.toBeDisabled();
//   });

//   it('should open the preview modal when "Preview Notice" button is clicked', () => {
//     render(<PreAdverse />);
//     const previewButton = screen.getByText('Preview Notice');
//     fireEvent.click(previewButton);
//     expect(screen.getByTestId('preview-modal')).toBeInTheDocument();
//   });

//   it('should enable the "Preview Notice" button when the checkbox is checked', () => {
//     const { getByText, getByLabelText } = render(<PreAdverse />);
//     const checkbox = getByLabelText('Assault Domestic Violence');

//     expect(getByText('Preview Notice')).toBeDisabled();
//     fireEvent.click(checkbox);
//     expect(getByText('Preview Notice')).toBeEnabled();
//   });
});
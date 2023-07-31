import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckboxBox from '../../../components/organisms/FilterDialog/index';
import '@testing-library/jest-dom/extend-expect';

describe('CheckboxBox', () => {
  it('should render checkboxes with correct initial checked state', () => {
    const checkedItems = {
      allStatus: true,
      clear: false,
      consider: true,
    };

    const { getByLabelText } = render(<CheckboxBox checkedItems={checkedItems} onApply={() => {}} />);

    expect(getByLabelText('All status')).toBeChecked();
    expect(getByLabelText('Clear')).not.toBeChecked();
    expect(getByLabelText('Consider')).toBeChecked();
  });

  it('should call onApply with updated checked items when checkboxes are clicked', () => {
    const initialCheckedItems = {
      allStatus: true,
      clear: false,
      consider: true,
    };

    const onApplyMock = jest.fn();
    const { getByLabelText } = render(<CheckboxBox checkedItems={initialCheckedItems} onApply={onApplyMock} />);

    fireEvent.click(getByLabelText('Clear'));
    expect(onApplyMock).toHaveBeenCalledWith({
      ...initialCheckedItems,
      clear: true,
    });

    fireEvent.click(getByLabelText('Consider'));
    expect(onApplyMock).toHaveBeenCalledWith({
      ...initialCheckedItems,
      consider: false,
    });

    fireEvent.click(getByLabelText('All status'));
    expect(onApplyMock).toHaveBeenCalledWith({
      ...initialCheckedItems,
      allStatus: false,
    });
  });
});

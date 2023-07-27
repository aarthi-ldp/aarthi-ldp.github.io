import React from 'react';
import Checkboxes from '../../../components/atoms/CheckBox/index';
import AtomTypography from '../../../components/atoms/Typography/index';


interface CheckboxTypographyMoleculeProps {
  checkboxProps: any; 
  typographyProps: any; 
}

const CheckboxTypographyMolecule: React.FC<CheckboxTypographyMoleculeProps> = (props) => {
  const { checkboxProps, typographyProps } = props;

  return (
    <div>
      <Checkboxes {...checkboxProps} />
      <AtomTypography {...typographyProps} />
    </div>
  );
};

export default CheckboxTypographyMolecule;

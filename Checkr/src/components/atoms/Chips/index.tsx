import * as React from 'react';
import Chip, { ChipProps } from '@mui/material/Chip';
import theme from '../../../components/themes/index';

 export interface ChipsProps extends ChipProps {
  label: string;
  sx?: React.CSSProperties;
}

const Chips: React.FC<ChipsProps> = (props) => {
  const { label, sx, ...rest } = props;

  const getColor = (): string | undefined => {
    if (label === 'CLEAR') {
      return theme.palette.accent.lightGreen;
    } else if (label === 'CONSIDER') {
      return theme.palette.accent.lightYellow;
    }
    return undefined;
  };

  return (
    <Chip label={label} color="default" 
    sx={{ backgroundColor: getColor(),color: label === 'CLEAR' ? theme.palette.accent.green : theme.palette.accent.yellow, ...sx }} {...rest} />
  );
};

export default Chips;

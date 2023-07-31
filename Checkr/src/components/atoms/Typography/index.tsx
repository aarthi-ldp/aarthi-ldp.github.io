import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme,Theme } from '@mui/material/styles';


interface AtomTypographyProps extends TypographyProps {
  text?: string;
}

const AtomTypography: React.FC<AtomTypographyProps> = (props) => {
  const { text, variant, ...typographyProps } = props; 
  const currentTheme = useTheme();

  const defaultVariant = 'body1';
  const typographyStyle = variant ? getTypographyStyle(currentTheme, variant || defaultVariant) : {};

  return (
    <Typography {...typographyProps} style={typographyStyle}>
      {text}
    </Typography>
  );
};

const getTypographyStyle = (theme: Theme, variant: string) => {
  switch (variant) {
    case 'h1':
      return theme.typography.h1;
    case 'h2':
      return theme.typography.h2;
    case 'body1':
      return theme.typography.body1;
    case 'body2':
      return theme.typography.body2;
    case 'caption2':
      return theme.typography.caption2;
    case 'subtitle1':
      return theme.typography.subtitle1;
    case 'subtitle2':
      return theme.typography.subtitle2;
    default:
      return {};
  }
};

export default AtomTypography;

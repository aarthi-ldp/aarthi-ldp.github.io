import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export interface TextfieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; 
  label?: string;
  InputProps?: {
    startAdornment?: JSX.Element;
  };
}

const Textfield: React.FC<TextfieldProps> = (props) => {
  const { value, onChange, placeholder, label } = props;

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: <InputAdornment position="start"><SearchIcon data-testid="search-icon" /></InputAdornment>,
      }}
    />
  );
};

export default Textfield;

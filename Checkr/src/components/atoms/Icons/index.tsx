import React from 'react';

interface IconProps {
  iconComponent: React.ElementType;
  dataTestId?: string; 
  alt?: string;
}

const Icon: React.FC<IconProps> = ({ iconComponent: IconComponent, dataTestId }) => {
  return <IconComponent data-testid={dataTestId} />; 
};

export default Icon;

import React from 'react';

interface IconProps {
  iconComponent: React.ElementType;
  dataTestId?: string; // Use dataTestId instead of alt
}

const Icon: React.FC<IconProps> = ({ iconComponent: IconComponent, dataTestId }) => {
  return <IconComponent data-testid={dataTestId} />; // Use data-testid attribute
};

export default Icon;

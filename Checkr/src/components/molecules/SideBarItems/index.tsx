import React from 'react';
import Icon from '../../atoms/Icons/index';

interface SidebarItemProps {
  icon: string; // Assuming the icon prop is the file name of the PNG file without the extension
  title: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title }) => {
  //const iconPath = require(`../../assets/${icon}`); // Generate the path to the PNG icon file

  return (
    <li className="sidebar-item">
      {/* <Icon src={`../../assets/${icon}`} alt={title} /> */}
      {/* //<span className="title">{title}</span> */}
    </li>
  );
};

export default SidebarItem; 
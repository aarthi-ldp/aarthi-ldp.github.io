import React from 'react';
import Icon from '../../atoms/Icons/index';

interface SidebarItemProps {
  icon: string; 
  title: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title }) => {
 

  return (
    <li className="sidebar-item">
    </li>
  );
};

export default SidebarItem; 
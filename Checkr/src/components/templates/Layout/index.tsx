import React, { ReactNode } from 'react';
import SideBar from '../../../components/organisms/SideBar/index';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div style={{ display: 'flex' }}>
            <SideBar/>
        <div style={{ flex :5 }}>{children}</div>
        </div>
    );
};

export default Layout;
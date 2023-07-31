import React, { ReactNode } from 'react';


interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div style={{ display: 'flex' }}>
           <div data-testid="Sidebar"></div>
        <div style={{ flex :5 }}>{children}</div>
        </div>
    );
};

export default Layout;
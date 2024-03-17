import React from "react";
import { ReactNode } from "react";
import Footer from './Footer'
import Header from './Header'

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
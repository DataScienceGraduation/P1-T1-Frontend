import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

const pageVariants = {
    initial: {
        opacity: 0,
        scale: 0.99,
    },
    in: {
        opacity: 1,
        scale: 1,
    },
    out: {
        opacity: 0,
        scale: 0.99,
    },
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1,
};

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        <Header />
        {children}
        <Footer />
    </motion.div>
);

export default Layout;

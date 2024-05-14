import React from "react";
import { ReactNode } from "react";
import Footer from './Footer'
import Header from './Header'
import { motion } from "framer-motion";

const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 0.99
    }
  };
  
  const logoVariants = {
    initial: {
      scale: 0.8,
      opacity: 0
    },
    in: {
      scale: 1,
      opacity: 1
    },
    out: {
      scale: 0.8,
      opacity: 0
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
  };

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (

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
}

export default Layout;
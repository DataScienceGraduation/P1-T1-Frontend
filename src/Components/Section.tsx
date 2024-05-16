import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<Props> = ({ children, className = '' }) => (
    <section
        className={`max-w-screen-sm px-4 py-12 mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl ${className}`}
    >
        {children}
    </section>
);

export default Section;

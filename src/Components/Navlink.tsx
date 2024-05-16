import React from 'react';

interface Props {
    href: string;
    name: string;
    classname?: string;
}

const Navlink: React.FC<Props> = ({ href, name, classname }) => (
    <a
        href={href}
        className={`tracking-[10%] hover:font-bold transition-all delay-75 text-lg ${classname}`}
    >
        {name}
    </a>
);

export default Navlink;

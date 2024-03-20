import React from 'react'

interface Props {
    href: string;
    name: string;
    classname?: string;
}

const Navlink: React.FC<Props> = ({ href, name, classname }) => {
    return (
        <a href={href} className={`text-sm space font-header font-bold tracking-[10%]  ${classname}`}>
            {name}
        </a>
    )
}

export default Navlink;
import React from 'react';

interface ButtonProps {
    text: string;
    color: string;
    variant?: 'solid' | 'ghost';
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({text, variant='solid', onClick, className})=>{
    return (
        <button className={`w-full py-2 transition-all delay-150 border-2 rounded-sm ${variant === 'solid' ? `text-white border-primary bg-primary hover:text-primary hover:bg-transparent` : `hover:text-white hover:bg-primary border-primary bg-transparent text-primary`} ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;

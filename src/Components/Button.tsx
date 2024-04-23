import React from 'react';

interface ButtonProps {
    text: string;
    color: string;
    variant?: 'solid' | 'ghost';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({text, color, variant='solid', onClick})=>{
    return (
        <button className={`w-full py-2 text-white transition-all delay-150 border-2 rounded-sm ${variant === 'solid' ? `border-${color} bg-${color}` : `hover:text-white text-${color} hover:bg-${color} bg-transparent border-${color}`} `} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;

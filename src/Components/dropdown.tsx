import React, { useState } from 'react';

import Button from './Button';

interface Props {
    options: Array<string>;
    onSelect: (option: string) => void;
}
const Dropdown: React.FC<Props> = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState('Size');
    const [isOpen, setIsOpen] = useState(false);
    const HandleSelect = (option: string) => {
        onSelect(option);
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (
        <div>
            <Button
                type="button"
                text={selectedOption}
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
                <div className="absolute w-full mt-2 origin-top bg-white rounded-md">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => HandleSelect(option)}
                                className="block w-full px-4 py-2 text-sm text-left text-gray-700 'border-b border-gray-200' hover:bg-gray-100"
                                role="menuitem"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;

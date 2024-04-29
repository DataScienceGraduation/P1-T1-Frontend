import React, {useState} from "react";
import Button from './Button'

interface Props{
   options:Array<string>
   onSelect: (option: string) => void;
}
const Dropdown: React.FC<Props> = ({options, onSelect}) => {
    const [selectedOption, setSelectedOption] = useState('Size')
    const [isOpen, setIsOpen] = useState(false)
    const HandleSelect = (option: string) => {
        onSelect(option);
        setSelectedOption(option)
        setIsOpen(false)
    }
    return(
        <div>
            <Button text={selectedOption} color='' variant='ghost' onClick={()=>setIsOpen(!isOpen)}/>
            {isOpen && (
                <div className="origin-top absolute bg-white mt-2 w-full rounded-md">
                   <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                   {options.map((option) => (
                            <button key={option}
                            onClick={() => HandleSelect(option)} 
                            className="block px-4 py-2 text-sm text-gray-700 w-full text-left 'border-b border-gray-200' hover:bg-gray-100"
                            role="menuitem">
                            {option}
                            </button>
                        ))}
                </div>
                </div>
            )}


        </div>

    );
}

export default Dropdown; 
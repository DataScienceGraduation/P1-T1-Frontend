import React from 'react';

import Button from './Button';

interface Props {
    name: string;
    price: number;
    image: string;
}

const Item: React.FC<Props> = ({ name, price, image }) => (
    <div className="w-full">
        <h1 className="relative inline p-4 text-xl font-bold rounded-sm shadow-md -left-4 bg-secondary">
            {name}
        </h1>
        <img src={image} alt={name} className="w-[90%] mx-auto" />
        <div className="relative w-[90%] mx-auto flex justify-between flex-auto top-2">
            <span className="flex-1 my-auto">${price}</span>
            <Button className="flex-1" text="Add to Cart" type="button" />
        </div>
    </div>
);

export default Item;

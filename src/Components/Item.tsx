import React from "react";
import Button from "./Button";

interface Props {
    name: string;
    price: number;
    image: string;
}

const Item: React.FC<Props> = ({ name, price, image }) => {
    return (
        <div className="w-full px-6 py-8 shadow-sm bg-secondary">
            <h1 className="relative inline p-4 text-xl font-bold rounded-sm shadow-md -left-8 -top-8 bg-secondary">{name}</h1>
            <img src={image} alt={name} className="w-full"></img>
            <div className="relative flex justify-between flex-auto -top-2">
                <span className="flex-1 my-auto">${price}</span>
                <Button className="flex-1" text="Add to Cart" color="primary" />
            </div>
        </div>
    )
}

export default Item;
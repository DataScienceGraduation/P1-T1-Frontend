import React from 'react';

interface Props {
    name: string;
    price: number;
    image: string;
    quantity?: number;
}

const ProductPreview: React.FC<Props> = ({
    name,
    price,
    image,
    quantity = 1,
}) => (
    <div className="flex items-center pb-4 space-x-4 border-b border-gray-200">
        <img src={image} alt="Striped Hoodie" className="w-31 h-36" />
        <div className="space-y-2">
            <p className="text-xl text-gray-500">{name}</p>
            <p className="font-bold">
                EGP
                {price}
            </p>
            <p className="text-s">{quantity} item | XSS | Striped</p>
        </div>
    </div>
);

export default ProductPreview;

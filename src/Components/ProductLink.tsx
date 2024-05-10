import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

interface Props {
    to: string;
    name: string;
    price: number;
    image: string;
}
const ProductLink: React.FC<Props> = ({to, name, price, image}) => (
       <Link to = {to}>
        <Item name={name} price={price} image={image}/>
       </Link>
);

export default ProductLink;
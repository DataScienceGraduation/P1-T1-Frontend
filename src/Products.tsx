import React, { useState, useEffect } from 'react';
import Layout from './Components/Layout';
import Button from './Components/Button';
import ProductLink from './Components/ProductLink';
import Section from './Components/Section';
import { useParams } from 'react-router-dom';
import Spinner from './Components/Spinner';

const Products = () => {
    const { name } = useParams();
    const [products, setProducts] = useState<Array<any>>([]);
    useEffect(() => {
        const formData = new FormData();
        formData.append('category', name as string);
        fetch(`https://petrinet.azurewebsites.net/api/getProducts/`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setProducts(data['products']);
            })
            .catch((err) => {
                window.location.href = '/NotFound';
            });
    }, [name]);
    return (
        <Layout>
            <Section className="py-8">
                <div className="flex flex-row justify-center order-1 row-span-1 space-x-4">
                    <Button
                        text="all"
                        variant="ghost"
                        className="w-56 rounded-lg"
                    />
                    <Button
                        text="Trainers"
                        variant="ghost"
                        className="w-56 rounded-lg"
                    />
                    <Button
                        text="Sweatshirts & hoodies"
                        variant="ghost"
                        className="w-56 rounded-lg"
                    />
                    <Button
                        text="Sweatpants"
                        variant="ghost"
                        className="w-56 rounded-lg"
                    />
                </div>
            </Section>
            <Section className="px-24 py-8">
                <div className="grid order-2 grid-cols-1 gap-4 lg:grid-cols-3">
                    {products.length === 0 ? (
                        <Spinner className="lg:col-span-3" />
                    ) : (
                        products.map((product) => (
                            <ProductLink
                                to={`../product/${product['id']}`}
                                name={product['name']}
                                price={product['price']}
                                image={product['image']}
                            />
                        ))
                    )}
                </div>
            </Section>
        </Layout>
    );
};

export default Products;

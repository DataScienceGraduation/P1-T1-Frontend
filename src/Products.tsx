import React, {useState, useEffect} from 'react';
import Layout from './Components/Layout';
import Button from './Components/Button';
import ProductLink from './Components/ProductLink'
import Section from './Components/Section';
import { useParams } from "react-router-dom";
import Spinner from './Components/Spinner';

const Products = () => {
    const { name } = useParams();
    const [categories, setCategories] = useState<Array<any>>([])
    const [products, setProducts] = useState<Array<any>>([])
    useEffect(() => {
        fetch('https://petrinet.azurewebsites.net/api/getCategories/', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            return data['categories'];
        })
        .then(data => {
            if(categories.length === 0){
                setCategories(data);
                if(data.length === 0){
                    window.location.href = '/404';
                }
                console.log(data);
            }
        }).finally(() => {
            for (let category of categories) {
                if (category['name'] === name){
                    const formData = new FormData();
                    formData.append('category', category['id']);
                    fetch(`https://petrinet.azurewebsites.net/api/getProducts/`, {
                        method: 'POST',
                        body: formData,
                    })
                    .then(response => response.json())
                    .then(data => {
                        return data['products'];
                    })
                    .then(data => {
                        console.log(data);
                        setProducts(data);
                    })
                }
            }
        })
    }, [categories])
    return (
        <Layout>
            <Section className='py-8'>
            <div className='flex flex-row justify-center order-1 row-span-1 space-x-4'>
                <Button text='all' variant='ghost' color='secondary' className='w-56 rounded-lg' />
                <Button text='Trainers' variant='ghost' color='secondary' className='w-56 rounded-lg' />
                <Button text='Sweatshirts & hoodies' variant='ghost' color='secondary' className='w-56 rounded-lg'/>
                <Button text='Sweatpants' variant='ghost' color='secondary' className='w-56 rounded-lg'/>
            </div>
            </Section>
            <Section className='px-24 py-8'>
           <div className="grid order-2 grid-cols-1 gap-4 lg:grid-cols-3">
            {
                products.length === 0 ? <Spinner className="lg:col-span-3" /> :
                products.map((product) => (
                    <ProductLink to="../product" name={product['name']} price={product['price']} image={product['image']} />
                ))
            }
           </div>
          </Section>
        </Layout>
    );
}

export default Products;
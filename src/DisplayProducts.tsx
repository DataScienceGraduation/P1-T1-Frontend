import React from 'react';
import Layout from './Components/Layout';
import Button from './Components/Button';
import ProductLink from './Components/ProductLink'
import championHoodie from './images/champion-hoodie.png';
import fleeceHoodie from './images/fleece-hoodie.png';
import hoodedSweatshirt from './images/hooded-sweatshirt.png';
import Section from './Components/Section';

const Display = () => {
    return(
        <Layout>
            <Section className='py-8'>
            <div className='row-span-1 flex flex-row space-x-4 justify-center order-1'>
                <Button text='all' variant='ghost' color='secondary' className='rounded-lg w-56' />
                <Button text='Trainers' variant='ghost' color='secondary' className='rounded-lg w-56' />
                <Button text='Sweatshirts & hoodies' variant='ghost' color='secondary' className='rounded-lg w-56'/>
                <Button text='Sweatpants' variant='ghost' color='secondary' className='rounded-lg w-56'/>
            </div>
            </Section>
            <Section className='py-8 px-24'>
           <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 order-2">
            <ProductLink to="../product" name="Product 1" price={50} image={championHoodie}/>
            <ProductLink to = "../product" name="Product 2" price={60} image={fleeceHoodie}/>
            <ProductLink to = "../product" name="Product 3" price={30} image={hoodedSweatshirt}/>
            <ProductLink to="../product" name="Product 1" price={50} image={championHoodie}/>
            <ProductLink to = "../product" name="Product 2" price={60} image={fleeceHoodie}/>
            <ProductLink to = "../product" name="Product 3" price={30} image={hoodedSweatshirt}/>
            <ProductLink to="../product" name="Product 1" price={50} image={championHoodie}/>
            <ProductLink to = "../product" name="Product 2" price={60} image={fleeceHoodie}/>
            <ProductLink to = "../product" name="Product 3" price={30} image={hoodedSweatshirt}/>
           </div>
          </Section>
        </Layout>
    )
}

export default Display;
import React, { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import Section from './Components/Section';
import Blob from './blob.svg';
import Circle from './circle.svg';
import ProductLink from './Components/ProductLink'

const App = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch('https://petrinet.azurewebsites.net/api/getFeaturedProducts/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => setFeaturedProducts(data['products']))
    }, [featuredProducts]);

  return (
    <Layout>
      <Section className="static py-32">
        <img src={Circle} className="absolute right-0 hidden top-24 lg:block" alt="Circle"></img>
        <h1 className="text-5xl relative lg:-left-1 xl:-left-2 font-body font-bold tracking-[0.2em] text-shadow">WE CHALLENGE <span className="block mt-8 mb-16 text-5xl">THE NORM</span></h1>
        <img src={Blob} className="absolute hidden bottom-72 -left-0 lg:block" alt="Blob"></img>
      </Section>
      <Section className="py-3.5">
        <h1 className="text-5xl relative lg:-left-1 xl:-left-2 font-body font-bold tracking-[0.2em] text-shadow text-center">
          TSHIRTS - TRAINERS - POLOS
        </h1>
      </Section>
      <Section>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {
            featuredProducts.map((product) => (
              <ProductLink to="../product" name={product['name']} price={product['price']} image={product['image']} />
            ))
          }
        </div>
      </Section>
    </Layout>
  );
}

export default App;

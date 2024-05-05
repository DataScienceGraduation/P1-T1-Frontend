import React, { useState } from 'react';
import Layout from './Components/Layout';
import Section from './Components/Section';
import championHoodie from './images/champion-hoodie.png';
import fleeceHoodie from './images/fleece-hoodie.png';
import hoodedSweatshirt from './images/hooded-sweatshirt.png';
import Blob from './blob.svg';
import Circle from './circle.svg';
import ProductLink from './Components/ProductLink'

const App = () => {
  const [animate, setAnimate] = useState(true);

  // Function to toggle animation
  const toggleAnimation = () => {
    setAnimate(!animate);
  }

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
          <ProductLink to="../product" name="Product 1" price={50} image={championHoodie} children={undefined}/>
          <ProductLink to="../product" name="Product 2" price={60} image={fleeceHoodie} children={undefined}/>
          <ProductLink to="../product" name="Product 3" price={30} image={hoodedSweatshirt} children={undefined}/>
        </div>
      </Section>
    </Layout>
  );
}

export default App;

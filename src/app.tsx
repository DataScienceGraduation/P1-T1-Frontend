import React from 'react';
import Layout from './Components/Layout';
import Section from './Components/Section';
import Item from './Components/Item';
import Nav from './Components/Nav';
import championHoodie from './images/champion-hoodie.png';
import fleeceHoodie from './images/fleece-hoodie.png';
import hoodedSweatshirt from './images/hooded-sweatshirt.png';
import Blob from './blob.svg';
import Circle from './circle.svg';

const App = () => {
  return (
    <Layout>
      <Section className="static py-32">
        <img src={Circle} className="absolute right-0 hidden top-24 lg:block" alt="Circle"></img>
        <h1 className="text-5xl relative lg:-left-1 xl:-left-2 font-body font-bold tracking-[0.2em] text-shadow">WE CHALLENGE <span className="block mt-8 mb-16 text-5xl">THE NORM</span></h1>
        <img src={Blob} className="absolute hidden bottom-72 -left-0 lg:block" alt="Blob"></img>
      </Section>
      <Section>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Item name="Product 1" price={50} image={championHoodie} />
          <Item name="Product 2" price={60} image={fleeceHoodie} />
          <Item name="Product 3" price={30} image={hoodedSweatshirt} />
        </div>
      </Section>
    </Layout>
  );
}

export default App;
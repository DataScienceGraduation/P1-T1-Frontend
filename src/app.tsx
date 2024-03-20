import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import Layout from './Components/Layout';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <header className='text-black'>
        <img src={logo} alt="logo" />
        <p className="font-heading">
          {count}
        </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <a
          className="text-4xl font-heading"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Layout>
  );
}

export default App;
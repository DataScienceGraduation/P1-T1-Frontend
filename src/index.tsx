import React from 'react';
import logo from './logo.svg';
import Layout from './Components/Layout';

const index = () => {
  return (
    <Layout>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="font-heading">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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

export default index;

import React from 'react';
import Layout from './Components/Layout';

const App = () => {
  return (
    <Layout>
      <h1 className='h-full my-[50rem]'>Urban Thread</h1>
      <a href='/login'>Login</a>
    </Layout>
  );
}

export default App;
import React from 'react';
import Layout from './Components/Layout';
import Form from './Components/Form';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Layout>
        <div className='py-12 mx-auto my-16 rounded-sm shadow-lg bg-secondary lg:max-w-lg '>
            <form className='px-4 pb-12 space-y-12'>
                <h1 className='text-3xl text-center font-heading'>Register</h1>
                <Form type='text' placeholder='Full Name' required={true} className='w-full' />
                <Form type='email' placeholder='Email' required={true} className='w-full' />
                <Form type='number' placeholder='Phone Number' required={true} className='w-full' />
                <Form type='text' placeholder='Governorate' required={true} className='w-full' />
                <Form type='text' placeholder='Address' required={true} className='w-full' />
                <Form type='password' placeholder='Password' required={true} className='w-full' />
                <Form type='password' placeholder='Confirm Password' required={true} className='w-full' />
                <button className='w-full py-2 text-white transition-all delay-150 border-2 rounded-sm border-primary hover:text-primary hover:bg-transparent bg-primary'>Login</button>
            </form>
            <p className='text-center '>Already have an account? <Link className='underline transition-all delay-150 text-primary hover:text-black hover:no-underline' to={'../login'}>Login!</Link></p>
        </div>
    </Layout>
  );
}

export default Register;
import React from 'react'
import logo from '../logo.svg'
import Form from './Form'

const Footer = () => {
    return (
        <footer className='py-12 bg-secondary'>
            <div className='grid max-w-screen-sm grid-rows-3 px-4 mx-auto space-y-4 lg:space-y-0 lg:grid-rows-1 lg:grid-cols-3 lg:max-w-screen-lg 2xl:max-w-screen-2xl'>
             <div className='my-auto text-center lg:text-left lg:order-1'>
                <h1>JOIN THE CONVERSATION</h1>
                <Form type='email' placeholder='example@gmail.com' required={true} className='w-full' />
             </div>
             <div className='order-first lg:order-2'>
                <img src={logo} alt='Urban thread' className='mx-auto'></img>
             </div>
             <div className='my-auto lg:order-3'>
                <div className='flex justify-center space-x-4 lg:justify-end'>
                    <span>Social</span>
                    <span>Legal</span>
                    <span>Contact</span>
                </div>
                <div className='flex justify-center space-x-4 lg:justify-end'>
                    <span>2024 &copy; Urban Thread</span> 
                </div>
             </div>
            </div>
        </footer>
    )
}

export default Footer;
import React from 'react'
import logo from '../logo.svg'

const Footer = () => {
    return (
        <footer className='bg-secondary'>
            <div className='grid max-w-screen-sm grid-cols-3 px-4 mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl'>
             <div className='my-auto'>
                <h1>JOIN THE CONVERSATION</h1>
             </div>
             <div>
                <img src={logo} alt='Urban thread' className='mx-auto'></img>
             </div>
             <div className='my-auto'>
                <div className='flex justify-end space-x-4'>
                    <span>Social</span>
                    <span>Legal</span>
                    <span>Contact</span>
                </div>
                <div className='flex justify-end space-x-4'>
                    <span>2024 &copy; Urban Thread</span> 
                </div>
             </div>
            </div>
        </footer>
    )
}

export default Footer;
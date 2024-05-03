import React, { useEffect, useState } from 'react'
import logo from '../logo.svg';
import shoppingCart from '../gg_shopping-cart.svg';
import search from '../gg_search.svg';
import user from '../gg_user.svg';
import Navlink from './Navlink';
import { Link } from 'react-router-dom';
import Checkout from './Cart';
import xmark from '../xmark.svg';
import bars from '../bars.svg';
import Form from './Form';

export const Nav = () => {
    const [showCheckout, setShowcheckout] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const toggleCheckout = () =>{
        setShowcheckout(!showCheckout);
    }
    const toggleNav = () =>{
        setShowNav(!showNav);
    }
    useEffect(() => {
        if(showNav){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }
    ,[showNav])
    return (
        <nav className='py-3 bg-secondary'>
            <div className={`w-full h-full z-[51] justify-center space-y-16 flex px-4 flex-col top-0 overscroll-none bg-secondary ${showNav ? 'fixed' : 'hidden'} md:hidden`}>
                <Form type='text' placeholder='Search' />
                <Navlink href="/athletics" classname='text-4xl font-bold' name="ATHLETICS" />
                <Navlink href="/essentials" classname='text-4xl font-bold' name="ESSENTIALS" />
            </div>
            <div className='grid max-w-screen-sm grid-cols-4 px-4 mx-auto md:grid-cols-3 lg:max-w-screen-lg 2xl:max-w-screen-2xl '>
                <div className='hidden my-auto space-x-4 md:block'>
                    <Navlink href="/athletics" name="ATHLETICS" />
                    <Navlink href="/essentials" name="ESSENTIALS" />
                </div>
                <Link to={'/'} className='col-span-2 md:col-span-1'>
                    <img src={logo} alt='Urban thread' className='mx-0 md:mx-auto'></img>
                </Link>
                <div className='flex justify-end col-span-2 my-auto space-x-4 md:col-span-1'>
                    <button onClick={toggleCheckout}>
                    <img src={shoppingCart} alt='Shopping Cart'></img>
                    </button>
                    <img src={search} className='hidden md:block' alt='search'></img>
                    <Link to={'/login'}>
                        <img src={user} alt='user'></img>
                    </Link>
                    <button onClick={toggleNav} className='md:hidden z-[53]'>
                        <img src={showNav ? xmark : bars} className='w-8' alt='navControl'></img>
                    </button>
                </div>
            </div>
            <Checkout show={showCheckout} onClose={toggleCheckout} />
        </nav>
    )
}

export default Nav;
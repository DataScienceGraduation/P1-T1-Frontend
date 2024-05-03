import React, { useState } from 'react'
import logo from '../logo.svg';
import shoppingCart from '../gg_shopping-cart.svg';
import search from '../gg_search.svg';
import user from '../gg_user.svg';
import Navlink from './Navlink';
import { Link } from 'react-router-dom';
import Checkout from './Cart';

export const Nav = () => {
    const [showCheckout, setShowcheckout] = useState(false);
    const toggleCheckout = () =>{
        setShowcheckout(!showCheckout);
    }
    return (
        <nav className='py-3 bg-secondary'>
            <div className='grid max-w-screen-sm grid-cols-3 px-4 mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl '>
                <div className='my-auto space-x-4'>
                    <Navlink href="/athletics" name="ATHLETICS" />
                    <Navlink href="/essentials" name="ESSENTIALS" />
                </div>
                <Link to={'/'}>
                    <img src={logo} alt='Urban thread' className='mx-auto'></img>
                </Link>
                <div className='flex justify-end my-auto space-x-4'>
                    <button onClick={toggleCheckout}>
                    <img src={shoppingCart} alt='Shopping Cart'></img>
                    </button>
                    <img src={search} alt='search'></img>
                    <Link to={'/login'}>
                        <img src={user} alt='user'></img>
                    </Link>
                </div>
            </div>
            <Checkout show={showCheckout} onClose={toggleCheckout} />
        </nav>
    )
}

export default Nav;
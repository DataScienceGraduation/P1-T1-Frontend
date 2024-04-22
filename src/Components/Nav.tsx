import React from 'react'
import logo from '../logo.svg';
import shoppingCart from '../gg_shopping-cart.svg';
import search from '../gg_search.svg';
import user from '../gg_user.svg';
import Navlink from './Navlink';

export const Nav = () => {
    return (
        <nav className='py-3 bg-secondary'>
            <div className='grid max-w-screen-sm grid-cols-3 px-4 mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl '>
                <div className='my-auto space-x-4'>
                    <Navlink href="/athletics" name="ATHLETICS" />
                    <Navlink href="/essentials" name="ESSENTIALS" />
                </div>
                <div>
                    <img src={logo} alt='Urban thread' className='mx-auto'></img>
                </div>
                <div className='flex justify-end my-auto space-x-4'>
                    <img src={shoppingCart} alt='Shopping Cart'></img>
                    <img src={search} alt='search'></img>
                    <img src={user} alt='user'></img>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
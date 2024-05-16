import React, { useEffect, useState } from 'react'
import logo from '../navlogo.svg';
import shoppingCart from '../gg_shopping-cart.svg';
import search from '../gg_search.svg';
import user from '../gg_user.svg';
import Navlink from './Navlink';
import { Link, NavLink } from 'react-router-dom';
import Checkout from './Cart';
import xmark from '../xmark.svg';
import bars from '../bars.svg';
import Form from './Form';
import Button from './Button';

export const Nav = () => {
    const [showCheckout, setShowcheckout] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [token,] = useState(localStorage.getItem('token'))
    const  [categories, setCategories] = useState<Array<any>>([]);
    const toggleCheckout = () =>{
        setShowcheckout(!showCheckout);
    }
    const toggleNav = () =>{
        setShowNav(!showNav);
    }
    useEffect(() => {
        if(localStorage.getItem('categories') && localStorage.getItem('categoriesTime') && localStorage.getItem('categoriesTime') && Date.now() - parseInt(localStorage.getItem('categoriesTime') as string) < 86400000) {
            setCategories(JSON.parse(localStorage.getItem('categories') || '[]'));
            return;
        }
        fetch('https://petrinet.azurewebsites.net/api/getCategories/', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            return data['categories'];
        })
        .then(data => {
            setCategories(data);
            localStorage.setItem('categories', JSON.stringify(data));
            localStorage.setItem('categoriesTime', Date.now().toString());
        })
    }, [])
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
            <div className={`w-full h-screen z-[51] justify-center space-y-8 flex px-4 flex-col top-0 overscroll-none bg-secondary ${showNav ? 'fixed' : 'hidden'} md:hidden`}>
                <Form type='text' placeholder='Search' />
                {categories?.map((category) => (
                    <Navlink href={`/Products/${category['name']}`} classname='text-2xl font-bold' name={category['name']} />
                ))}
                {token ?
                <Navlink href={'/account'} classname='text-2xl font-bold' name='Account' /> :
                <Navlink href={'/login'} classname='text-2xl font-bold' name='Login' />
                }
            </div>
            <div className='grid max-w-screen-sm grid-cols-4 px-4 mx-auto md:grid-cols-3 lg:max-w-screen-lg 2xl:max-w-screen-2xl '>
                <Link to={'/'} className='col-span-2 md:col-span-1'>
                    <img src={logo} alt='Urban thread'></img>
                </Link>
                <div className='hidden mx-auto my-auto space-x-4 md:block'>
                    {categories?.map((category) => (
                        <Navlink href={`/Products/${category['name']}`} name={category['name']} />
                    ))}
                </div>
                <div className='flex justify-end col-span-2 my-auto space-x-4 md:col-span-1'>
                    {
                        token && 
                        <button onClick={toggleCheckout}>
                        <img src={shoppingCart} alt='Shopping Cart'></img>
                        </button>
                    }
                    <img src={search} className='hidden' alt='search'></img>
                    
                    {token ? 
                    <Link to={'/account'}>
                        <img src={user} alt='user'></img>
                    </Link> : 
                    <Link to={'/login'} className='px-4 text-white transition-all delay-150 border-2 border-primary bg-primary hover:bg-transparent hover:text-black'>Login</Link>}
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
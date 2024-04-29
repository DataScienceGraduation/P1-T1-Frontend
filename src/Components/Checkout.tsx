import React from 'react';
import Button from './Button';
import Cart from '../Cart';
import { Link } from 'react-router-dom';
import StrippedHoodie from '../images/StrippedHoodie.png';
import trainers from '../images/trainers.png';

interface CheckoutProps{
    show: boolean;
    onClose: () => void;
}

const Checkout: React.FC<CheckoutProps> =  ({show,onClose}) => {
    if (!show) return null;

    return(
        <div className='fixed right-0 inset-y-0 w-1/3 bg-white shadow-md flex flex-col justify-between'>
          <div className='p-4 bg-gray-100'>
            <h2 className='text-lg font-body font-bold text-center'>CHECKOUT CART</h2>
          </div>
          <div className='gird absolute py-32 flex flex-row space-x-7 grid-cols-2 px-4'>
            <div className='space-y-4 flex flex-col'>
                <div className='flex space-x-4 items-center border-b border-gray-200 pb-4'>
                    <img src={trainers} alt='Trainers' className='w-31 h-36'></img>
                    <div className='space-y-2'>
                        <p className='text-xl text-gray-500'>Trainers</p>
                        <p className='font-bold'>EGP 2,390</p>
                        <p className='text-s'>1 item | 37 EUR | White</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center border-b border-gray-200 pb-4'>
                    <img src={StrippedHoodie} alt='Striped Hoodie' className='w-31 h-36'></img>
                    <div className='space-y-2'>
                        <p className='text-xl text-gray-500'>Striped Sweatshirt</p>
                        <p className='font-bold'>EGP 2,390</p>
                        <p className='text-s'>1 item | XSS | Striped</p>
                    </div>
                </div>
            </div>
           </div>
           <div className='bottom-0 w-full absolute pb-20 flex justify-center mx-auto'>
                <div className='flex flex-row space-x-20'>
                    <p className='text-bold'>TOTAL</p>
                    <p className='text-gray-700'>EGP 4000</p>
                </div>
           </div>
            <div className='bottom-0 flex justify-center w-full space-x-4 mb-5'>
            <Link to='../Cart'>
                    <Button className="w-80" text='CHECKOUT' color='secondary' />
            </Link>
            <button onClick={onClose} className="bg-gray-200 py-2 px-4 rounded-lg">Close</button>
           </div>
        </div>
    );
}

export default Checkout;

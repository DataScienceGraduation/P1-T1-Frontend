import React from 'react';
import { Link } from 'react-router-dom';

import StrippedHoodie from '../images/StrippedHoodie.png';
import trainers from '../images/trainers.png';
import Button from './Button';

interface CheckoutProps {
    show: boolean;
    onClose: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-x-0 inset-y-0 z-50 grid w-full grid-cols-1 md:grid-cols-3">
            <button
                className="hidden md:block md:col-span-2"
                onClick={onClose}
            />
            <div className="flex flex-col justify-between col-span-1 bg-white shadow-md">
                <div className="p-4 bg-gray-100">
                    <h2 className="text-lg font-bold text-center font-body">
                        CHECKOUT CART
                    </h2>
                </div>
                <div className="absolute flex flex-row grid-cols-2 px-4 py-32 gird space-x-7">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center pb-4 space-x-4 border-b border-gray-200">
                            <img
                                src={trainers}
                                alt="Trainers"
                                className="w-31 h-36"
                            />
                            <div className="space-y-2">
                                <p className="text-xl text-gray-500">
                                    Trainers
                                </p>
                                <p className="font-bold">EGP 2,390</p>
                                <p className="text-s">
                                    1 item | 37 EUR | White
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center pb-4 space-x-4 border-b border-gray-200">
                            <img
                                src={StrippedHoodie}
                                alt="Striped Hoodie"
                                className="w-31 h-36"
                            />
                            <div className="space-y-2">
                                <p className="text-xl text-gray-500">
                                    Striped Sweatshirt
                                </p>
                                <p className="font-bold">EGP 2,390</p>
                                <p className="text-s">1 item | XSS | Striped</p>
                            </div>
                        </div>
                        <div className="flex items-center pb-4 space-x-4 border-b border-gray-200">
                            <img
                                src={StrippedHoodie}
                                alt="Striped Hoodie"
                                className="w-31 h-36"
                            />
                            <div className="space-y-2">
                                <p className="text-xl text-gray-500">
                                    Striped Sweatshirt
                                </p>
                                <p className="font-bold">EGP 2,390</p>
                                <p className="text-s">1 item | XSS | Striped</p>
                            </div>
                        </div>
                        <div className="flex items-center pb-4 space-x-4 border-b border-gray-200">
                            <img
                                src={StrippedHoodie}
                                alt="Striped Hoodie"
                                className="w-31 h-36"
                            />
                            <div className="space-y-2">
                                <p className="text-xl text-gray-500">
                                    Striped Sweatshirt
                                </p>
                                <p className="font-bold">EGP 2,390</p>
                                <p className="text-s">1 item | XSS | Striped</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bottom-0 z-50 flex justify-center w-full pb-20 mx-auto" />
                <div className="bottom-0 z-50 w-full px-12 mb-5 bg-secondary">
                    <p className="block px-4 py-4 mx-auto my-4 space-x-20 text-center border-2 rounded-sm shadow-sm border-primary text-bold">
                        <span className="text-bold">TOTAL</span>
                        <span className="text-gray-700">EGP 4000</span>
                    </p>
                    <div className="flex space-x-4">
                        <Link to="../Checkout" className="w-full">
                            <Button text="CHECKOUT" />
                        </Link>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

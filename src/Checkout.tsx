import React from 'react';
import Layout from './Components/Layout';
import Section from './Components/Section';
import ProductPreview from './Components/ProductPreview';
import championHoodie from './images/champion-hoodie.png';
import Button from './Components/Button';
import Form from './Components/Form';

const Checkout: React.FC = () => {
    return (
        <Layout>
            <Section>
                <div className="grid gap-4 md:grid-cols-5">
                    <div className="space-y-4 md:col-span-3">
                        <h2 className="text-xl font-bold font-heading">
                            Delivery Information
                        </h2>
                        <div className="px-4 py-6 space-y-4 shadow-sm bg-secondary border-sm">
                            <div className="grid grid-cols-2 gap-4">
                                <Form
                                    type="text"
                                    required={true}
                                    name="Country"
                                    placeholder="Country"
                                />
                                <Form
                                    type="text"
                                    required={true}
                                    name="City"
                                    placeholder="City"
                                />
                                <Form
                                    type="text"
                                    className="col-span-2"
                                    required={true}
                                    name="Street"
                                    placeholder="Street"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Form
                                    type="text"
                                    required={true}
                                    name="Apartment No."
                                    placeholder="Apartment"
                                />
                                <Form
                                    type="text"
                                    required={true}
                                    name="Zip Code"
                                    placeholder="Zip Code"
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold font-heading">
                            Delivery Time
                        </h2>
                        <div className="px-4 py-6 space-y-4 shadow-sm bg-secondary border-sm">
                            <select className="w-full py-4 border border-gray-300 rounded-sm shadow-sm">
                                <option>Standard Delivery (2-5 days)</option>
                                <option>Express Delivery (1-2 days)</option>
                            </select>
                        </div>
                        <h2 className="text-xl font-bold font-heading">
                            Payment Method
                        </h2>
                        <div className="px-4 py-6 space-y-4 shadow-sm bg-secondary border-sm">
                            <input
                                type="radio"
                                id="cash"
                                name="payment"
                                value="Cash on delivery"
                            />
                            <label htmlFor="cash" className="pl-2 font-bold">
                                Credit Card
                            </label>
                        </div>
                    </div>
                    <div className="space-y-4 md:col-span-2">
                        <h2 className="text-xl font-bold font-heading">
                            Order Summary
                        </h2>
                        <div className="px-4 py-6 space-y-4 shadow-sm bg-secondary border-sm">
                            <ProductPreview
                                name="Product 1"
                                price={50}
                                image={championHoodie}
                                quantity={1}
                            />
                            <ProductPreview
                                name="Product 1"
                                price={50}
                                image={championHoodie}
                                quantity={1}
                            />
                            <ProductPreview
                                name="Product 1"
                                price={50}
                                image={championHoodie}
                                quantity={1}
                            />
                            <p className="block px-4 py-4 mx-auto my-4 space-x-20 text-center border-2 rounded-sm shadow-sm border-primary text-bold">
                                <span className="font-bold">Total</span>
                                <span className="text-gray-700">EGP 4,000</span>
                            </p>
                            <Button text="Place Order" />
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default Checkout;

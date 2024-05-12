import React, { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import Section from './Components/Section';
import ProductPreview from './Components/ProductPreview';
import championHoodie from './images/champion-hoodie.png';
import Button from './Components/Button';
import Form from './Components/Form';
import { Link } from 'react-router-dom';

const Account: React.FC = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const logout = async () => {
        const formData = new FormData();
        if(token) {
            formData.append('token', token)
            fetch('https://petrinet.azurewebsites.net/api/logout/', {
                method: 'POST',
                body: formData
            }).then(response => {
                if(response.ok) {
                    localStorage.removeItem('token')
                    setToken(null)
                    window.location.href = '/login'
                }
            })
        }
    }
    useEffect(() => {
        if(!token || token === 'undefined'){
            window.location.href = '/login'
        }
    }, [token])
    return (
        <Layout>
            <Section>
                <div className='grid gap-4 md:grid-cols-5'>
                    <div className='space-y-4 md:col-span-3'>
                        <h2 className='text-xl font-bold font-heading'>Account Information</h2>
                        <div className='px-4 py-6 space-y-4 shadow-sm bg-secondary border-sm'>
                            <div className='grid grid-cols-2 gap-4'>
                                <Form type='text' required={true} name='First Name' placeholder='First Name'/>
                                <Form type='text' required={true} name='Last Name' placeholder='Last Name'/>
                                <Form type='email' required={true} name='Email' placeholder='Email'/>
                                <Form type='password' required={true} name='Password' placeholder='Password'/>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <Form type='text' required={true} name='Apartment No.' placeholder='Apartment'/>
                                <Form type='text' required={true} name='Zip Code' placeholder='Zip Code'/>
                            </div>
                        </div>
                        <h2 className='text-xl font-bold font-heading'>Delivery Information</h2>
                        <div className='px-4 py-6 space-y-4 shadow-sm bg-secondary border-sm'>
                            <div className='grid grid-cols-2 gap-4'>
                                <Form type='text' required={true} name='Country' placeholder='Country'/>
                                <Form type='text' required={true} name='City' placeholder='City'/>
                                <Form type='text' className='col-span-2' required={true} name='Street' placeholder='Street'/>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <Form type='text' required={true} name='Apartment No.' placeholder='Apartment'/>
                                <Form type='text' required={true} name='Zip Code' placeholder='Zip Code'/>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4 md:col-span-2'>
                        <h2 className='text-xl font-bold font-heading'>Notifications</h2>
                        <div className='px-4 py-6 space-y-4 shadow-sm bg-secondary border-sm'>
                            <div>
                                <input type='checkbox' id='email' name='email' value='email'></input>
                                <label htmlFor='email' className='pl-2 font-bold'>Email Notifications</label>
                            </div>
                            <div>
                                <input type='checkbox' id='sms' name='sms' value='sms'></input>
                                <label htmlFor='sms' className='pl-2 font-bold'>SMS Notifications</label>
                            </div>
                                <div>
                                <input type='checkbox' id='push' name='push' value='push'></input>
                                <label htmlFor='push' className='pl-2 font-bold'>Push Notifications</label>
                            </div>
                            <Button text='Save Changes' color='primary'/>
                        </div>
                        <button onClick={logout} className='w-1/2 px-4 py-4 text-white bg-red-500 rounded-sm'>Logout</button>
                    </div>
                </div>
            </Section>
            <Section>
                <h1 className='text-xl font-bold font-heading'>Order History</h1>
                <div className='space-y-8'>
                    <div className='space-y-8'>
                        <div className='flex flex-row justify-between'>
                            <h2 className='text-xl font-bold'>Order #951293129</h2>
                            <Link to='/order/951293129' className='inline text-xl font-bold underline transition-all delay-150 text-primary hover:text-black'>Track Order</Link>
                        </div>
                        <div className='grid gap-4 md:grid-cols-3'>
                            <ProductPreview name='Product 1' price={50} image={championHoodie} quantity={1}/>
                            <ProductPreview name='Product 1' price={50} image={championHoodie} quantity={1}/>
                            <ProductPreview name='Product 1' price={50} image={championHoodie} quantity={1}/>
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex flex-row justify-between'>
                            <h2 className='text-xl font-bold'>Order #951293129</h2>
                            <Link to='/order/951293129' className='inline text-xl font-bold underline transition-all delay-150 text-primary hover:text-black'>Track Order</Link>
                        </div>
                        <div className='grid gap-4 md:grid-cols-3'>
                            <ProductPreview name='Product 1' price={50} image={championHoodie} quantity={1}/>
                            <ProductPreview name='Product 1' price={50} image={championHoodie} quantity={1}/>
                            <ProductPreview name='Product 1' price={50} image={championHoodie} quantity={1}/>
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex flex-row justify-between'>
                            <h2 className='text-xl font-bold'>Order #951293129</h2>
                            <Link to='/order/951293129' className='inline text-xl font-bold underline transition-all delay-150 text-primary hover:text-black'>Track Order</Link>
                        </div>
                        <div className='grid gap-4 md:grid-cols-3'>
                            <ProductPreview name='Product 1' price={50} image={championHoodie} quantity={1}/>
                            <ProductPreview name='Product 1' price={50} image={championHoodie} quantity={1}/>
                            <ProductPreview name='Product 1' price={50} image={championHoodie} quantity={1}/>
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}

export default Account;
import React, { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import Form from './Components/Form';
import Button from './Components/Button';
import { Link } from 'react-router-dom';
import Spinner from './Components/Spinner';

const Register = () => {
    const [token] = useState(localStorage.getItem('token'));
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [governorate, setGovernorate] = useState('');
    const [apartment, setApartment] = useState('');
    const [street, setStreet] = useState('');
    const [password, setPassword] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const register = async () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }
        if (phone.length !== 11) {
            setError('Phone number must be 11 characters');
            return;
        }
        if (zipCode.length !== 5) {
            setError('Zip code must be 5 characters');
            return;
        }
        setIsLoading(true);
        const formData = new FormData();
        formData.append('username', username);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('governorate', governorate);
        formData.append('street', street);
        formData.append('apartment', apartment);
        formData.append('password', password);
        formData.append('zipcode', zipCode);
        await fetch('https://petrinet.azurewebsites.net/api/signup/', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data['message'] === 'User created') {
                    window.location.href = '/login';
                }
                if (data['message']) {
                    setError(data['message']);
                    return;
                }
            })
            .catch((err) => {
                setError('An error occurred');
                setIsLoading(false);
            });
        setIsLoading(false);
    };
    useEffect(() => {
        if (token && token !== 'undefined') {
            window.location.href = '/';
        }
    }, [token]);
    useEffect(() => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
        }
    }, [password, confirmPassword]);
    return (
        <Layout>
            <div className="py-12 mx-auto my-16 rounded-sm shadow-lg bg-secondary lg:max-w-lg ">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <form className="px-4 pb-12 space-y-12">
                        <h1 className="text-3xl text-center font-heading">
                            Register
                        </h1>
                        {error && (
                            <p className="text-center text-red-500">{error}</p>
                        )}
                        <Form
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Username"
                            required={true}
                            className="w-full"
                        />
                        <Form
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Full name"
                            required={true}
                            className="w-full"
                        />
                        <Form
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            required={true}
                            className="w-full"
                        />
                        <Form
                            onChange={(e) => setPhone(e.target.value)}
                            type="number"
                            placeholder="Phone Number"
                            required={true}
                            className="w-full"
                        />
                        <Form
                            onChange={(e) => setGovernorate(e.target.value)}
                            type="text"
                            placeholder="Governorate"
                            required={true}
                            className="w-full"
                        />
                        <Form
                            onChange={(e) => setApartment(e.target.value)}
                            type="text"
                            placeholder="Apartment"
                            required={true}
                            className="w-full"
                        />
                        <Form
                            onChange={(e) => setStreet(e.target.value)}
                            type="text"
                            placeholder="Street"
                            required={true}
                            className="w-full"
                        />
                        <Form
                            onChange={(e) => setZipCode(e.target.value)}
                            type="number"
                            placeholder="Zip Code"
                            required={true}
                            className="w-full"
                        />
                        <Form
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            required={true}
                            className="w-full"
                        />
                        <Form
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            placeholder="Confirm Password"
                            required={true}
                            className="w-full"
                        />
                        <Button
                            type="button"
                            text="Register"
                            onClick={register}
                        />
                    </form>
                )}
                <p className="text-center ">
                    Already have an account?{' '}
                    <Link
                        className="underline transition-all delay-150 text-primary hover:text-black hover:no-underline"
                        to={'../login'}
                    >
                        Login!
                    </Link>
                </p>
            </div>
        </Layout>
    );
};

export default Register;

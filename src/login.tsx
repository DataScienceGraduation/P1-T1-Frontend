import React, { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import Form from './Components/Form';
import Button from './Components/Button';
import { Link } from 'react-router-dom';
import Spinner from './Components/Spinner';

const Login = () => { 
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const login = async () => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append('name', name)
    formData.append('password', password)
    await fetch('https://petrinet.azurewebsites.net/api/signin/', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(data => {
        if(data['message']) {
          setError(data['message'])
          return
        }
        localStorage.setItem('token', data['token'])
        setToken(data['token'])
      })
    setIsLoading(false)
  }
  useEffect(() => {
    if(token && token !== 'undefined'){
      window.location.href = '/'
    }
  }, [token])
  return (
    <Layout>
      <div className='py-12 mx-auto my-16 rounded-sm shadow-lg bg-secondary lg:max-w-lg '>
        {isLoading ? <Spinner /> :
            <form className='px-4 pb-12 space-y-12'>
                <h1 className='text-3xl text-center font-heading'>Login</h1>
                {error && <p className='text-center text-red-500'>{error}</p>}
                <Form onChange={handleNameChange} id="name" type='text' placeholder='name' className='w-full' required={true} />
                <Form onChange={handlePasswordChange} id="password" type='password' placeholder='Password' className='w-full' required={true} />
                <Button type="submit" onClick={login} text='login' color='primary'/>
            </form>
        }
            <p className='text-center '>No account? <Link className='underline transition-all delay-150 text-primary hover:text-black hover:no-underline' to={'../register'}>Register!</Link></p>
        </div>
    </Layout>
  );
}

export default Login;
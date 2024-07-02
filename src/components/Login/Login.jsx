import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import './login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
           const res = await fetch('https://api.streamflics.xyz/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
           }) ;
           if(res.ok){
            const data = await res.json();
            const {token} = data;
            localStorage.setItem('authToken', token);
            navigate('/')
           }
        }catch(error){
            console.error(error);
            alert('error logging in');
        }
    }

  return (
    <div className='auth-container'>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login to your Account</h2>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type='submit' className='auth-button'>Login</button>
        <p>
            Don't have an account ? <Link to='/signup'>Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login

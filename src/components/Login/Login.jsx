import React, { useContext } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom';
import './login.css'
import Welcome from '../Welcome/Welcome';
import { UserContext } from '../../Usecontext/UserContext';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);
    const {setUserDetails} = useContext(UserContext)


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
           const res = await fetch('http://localhost:5000/login',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
           })
           if(res.ok){
            const data = await res.json();
            const {token, user} = data;
            localStorage.setItem('authToken', token);
            setToken(token);
            setUserDetails(user)
          }else{
            alert('Invalid Username or Password. Please try again');
          }
        }catch(error){
            console.error(error);
            alert('error logging in');
        }
    }

    if(token){
      return <Welcome/>
    }

  return (
    <div className='auth-container'>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1 className='app-name'>StreamFlics</h1>
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

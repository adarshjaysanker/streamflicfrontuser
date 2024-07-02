import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

   const [fullname, setName] = useState('');
   const [email, setEmail] = useState('');
   const [mobileNumber, setMobileNumber] = useState('');
   const [password, setPassword] = useState('');
   const [confirmpassword, setConfirmPassword] = useState('');

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
       e.preventDefault();
       if(password !== confirmpassword){
        return alert('Passwords do not match');
       }
       try{
        const res = await fetch('https://api.streamflics.xyz/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullname, email, mobileNumber, password
            })
        });
        if(res.ok){
            alert('User created successfully');
            navigate('/login');
        }
       }catch(error){
         console.error(error);
         alert('Failed to create user');
       }
   }

  return (
    <div className='auth-container'>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>StreamFlics</h1>
        <h2>Create Your Account</h2>
        <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id='name' value={fullname} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="mobilenumber">Mobile Number</label>
            <input type="text" id='mobilenumber' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" id='confirmpassword' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <button type='submit' className="auth-button">Sign Up</button>
        <p>
            Already have an account ? <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup

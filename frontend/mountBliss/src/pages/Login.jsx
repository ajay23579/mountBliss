import React, { useState } from 'react'

const Login=() => {
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Email: ',email)
        console.log('Password: ',password)
    }
  return (
    <>
    <div>Login Form</div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
        type='email'
        id='email'
        required
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder='Enter Your Email'
        style={{width: '100%', margin:'1rem',padding:'0.5rem'}} />

         <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />

        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Login</button>
    </form>
    </>
  )
}

export default Login
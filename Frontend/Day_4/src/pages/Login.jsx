// Login.js
import React, { useState } from 'react';
import '..//assets/css/Login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
   
    if (username === 'admin' && password === 'admin@123') 
    {
      // alert('Login successful!');
      navigate('/admin');
    } 
    else if(username==='demo' && password==='demo@123')
    {
        // alert('login successful');
        navigate('/home');
    }
    else {
      
     setErrorMessage('Invalid username and password');
    }
  };

  return (
    <div className="login_container">
      <h2>Login</h2>
      {errorMessage && <p className="error_message">{errorMessage}</p>}
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
